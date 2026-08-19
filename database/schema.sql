-- Database foundation for the ecommerce standalone MVP.
-- This schema is intentionally provider-neutral PostgreSQL, while being ready
-- for a future Supabase project. It does not create public storage policies.

create extension if not exists pgcrypto;

do $$
begin
  create type public.order_status as enum (
    'new',
    'awaiting_payment',
    'paid',
    'in_production',
    'shipped',
    'delivered',
    'cancelled',
    'refunded'
  );
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.payment_status as enum (
    'pending',
    'approved',
    'refused',
    'cancelled',
    'refunded'
  );
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.payment_gateway as enum ('pagarme');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.coupon_discount_type as enum ('percentage', 'fixed_amount');
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.admin_role as enum ('admin', 'operator');
exception
  when duplicate_object then null;
end $$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  image_url text,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  name text not null,
  slug text not null unique,
  short_description text,
  description text,
  price integer not null check (price >= 0),
  compare_at_price integer check (compare_at_price is null or compare_at_price >= 0),
  currency char(3) not null default 'BRL',
  active boolean not null default true,
  featured boolean not null default false,
  personalization_config jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  src text not null,
  alt text,
  width integer check (width is null or width > 0),
  height integer check (height is null or height > 0),
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  document text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.coupons (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  description text,
  discount_type public.coupon_discount_type not null,
  discount_value integer not null check (discount_value >= 0),
  minimum_order_amount integer check (minimum_order_amount is null or minimum_order_amount >= 0),
  usage_limit integer check (usage_limit is null or usage_limit > 0),
  usage_count integer not null default 0 check (usage_count >= 0),
  starts_at timestamptz,
  expires_at timestamptz,
  active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.shipping_methods (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text not null unique,
  description text,
  price integer not null default 0 check (price >= 0),
  estimated_days_min integer check (estimated_days_min is null or estimated_days_min >= 0),
  estimated_days_max integer check (estimated_days_max is null or estimated_days_max >= estimated_days_min),
  active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null unique,
  customer_id uuid references public.customers(id) on delete set null,
  coupon_id uuid references public.coupons(id) on delete set null,
  shipping_method_id uuid references public.shipping_methods(id) on delete set null,
  status public.order_status not null default 'new',
  payment_status public.payment_status not null default 'pending',
  currency char(3) not null default 'BRL',
  subtotal integer not null default 0 check (subtotal >= 0),
  discount_total integer not null default 0 check (discount_total >= 0),
  shipping_total integer not null default 0 check (shipping_total >= 0),
  total integer not null default 0 check (total >= 0),
  shipping_address jsonb not null default '{}'::jsonb,
  customer_notes text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  fbclid text,
  gclid text,
  pagarme_order_id text unique,
  pagarme_checkout_url text,
  tracking_code text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  product_name text not null,
  product_slug text,
  unit_price integer not null check (unit_price >= 0),
  quantity integer not null check (quantity > 0),
  total integer not null check (total >= 0),
  customization jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.personalization_files (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  order_item_id uuid not null references public.order_items(id) on delete cascade,
  bucket_name text not null default 'order-uploads',
  original_file_name text not null,
  storage_path text not null unique,
  mime_type text not null,
  file_size bigint not null check (file_size >= 0),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint personalization_files_path_matches_order
    check (storage_path like ('orders/' || order_id::text || '/uploads/%'))
);

create table if not exists public.payment_transactions (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  gateway public.payment_gateway not null default 'pagarme',
  external_transaction_id text,
  external_charge_id text,
  status public.payment_status not null default 'pending',
  amount integer not null check (amount >= 0),
  currency char(3) not null default 'BRL',
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (gateway, external_transaction_id)
);

create table if not exists public.admin_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  full_name text,
  role public.admin_role not null default 'operator',
  active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.webhook_events (
  id uuid primary key default gen_random_uuid(),
  gateway public.payment_gateway not null default 'pagarme',
  external_event_id text not null,
  event_type text not null,
  order_id uuid references public.orders(id) on delete set null,
  payload jsonb not null default '{}'::jsonb,
  processed_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (gateway, external_event_id)
);

create index if not exists idx_products_category_active on public.products(category_id, active);
create index if not exists idx_products_featured_active on public.products(featured, active);
create index if not exists idx_product_images_product_sort on public.product_images(product_id, sort_order);
create index if not exists idx_customers_email on public.customers(email);
create index if not exists idx_coupons_active_dates on public.coupons(active, starts_at, expires_at);
create index if not exists idx_shipping_methods_active on public.shipping_methods(active);
create index if not exists idx_orders_customer_created on public.orders(customer_id, created_at desc);
create index if not exists idx_orders_status_created on public.orders(status, created_at desc);
create index if not exists idx_orders_payment_status on public.orders(payment_status);
create index if not exists idx_order_items_order on public.order_items(order_id);
create index if not exists idx_personalization_files_order on public.personalization_files(order_id);
create index if not exists idx_personalization_files_item on public.personalization_files(order_item_id);
create index if not exists idx_payment_transactions_order on public.payment_transactions(order_id);
create index if not exists idx_webhook_events_unprocessed on public.webhook_events(created_at) where processed_at is null;

drop trigger if exists set_categories_updated_at on public.categories;
create trigger set_categories_updated_at before update on public.categories for each row execute function public.set_updated_at();
drop trigger if exists set_products_updated_at on public.products;
create trigger set_products_updated_at before update on public.products for each row execute function public.set_updated_at();
drop trigger if exists set_product_images_updated_at on public.product_images;
create trigger set_product_images_updated_at before update on public.product_images for each row execute function public.set_updated_at();
drop trigger if exists set_customers_updated_at on public.customers;
create trigger set_customers_updated_at before update on public.customers for each row execute function public.set_updated_at();
drop trigger if exists set_coupons_updated_at on public.coupons;
create trigger set_coupons_updated_at before update on public.coupons for each row execute function public.set_updated_at();
drop trigger if exists set_shipping_methods_updated_at on public.shipping_methods;
create trigger set_shipping_methods_updated_at before update on public.shipping_methods for each row execute function public.set_updated_at();
drop trigger if exists set_orders_updated_at on public.orders;
create trigger set_orders_updated_at before update on public.orders for each row execute function public.set_updated_at();
drop trigger if exists set_order_items_updated_at on public.order_items;
create trigger set_order_items_updated_at before update on public.order_items for each row execute function public.set_updated_at();
drop trigger if exists set_personalization_files_updated_at on public.personalization_files;
create trigger set_personalization_files_updated_at before update on public.personalization_files for each row execute function public.set_updated_at();
drop trigger if exists set_payment_transactions_updated_at on public.payment_transactions;
create trigger set_payment_transactions_updated_at before update on public.payment_transactions for each row execute function public.set_updated_at();
drop trigger if exists set_admin_users_updated_at on public.admin_users;
create trigger set_admin_users_updated_at before update on public.admin_users for each row execute function public.set_updated_at();
drop trigger if exists set_webhook_events_updated_at on public.webhook_events;
create trigger set_webhook_events_updated_at before update on public.webhook_events for each row execute function public.set_updated_at();
