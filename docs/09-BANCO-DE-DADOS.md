# 09 — Banco de Dados

## 1. Banco sugerido

Supabase/PostgreSQL.

## 2. Tabelas principais

```txt
categories
products
product_images
customers
orders
order_items
personalization_files
payment_transactions
coupons
shipping_methods
admin_users
webhook_events
```

## 3. categories

```sql
id uuid primary key
name text not null
slug text unique not null
description text
hero_image text
mobile_hero_image text
seo_title text
seo_description text
active boolean default true
sort_order integer default 0
created_at timestamptz default now()
updated_at timestamptz default now()
```

## 4. products

```sql
id uuid primary key
category_id uuid references categories(id)
name text not null
slug text unique not null
short_description text
long_description text
price integer not null -- centavos
compare_at_price integer
pix_discount_percent integer
installment_max integer default 6
production_time text
shipping_info text
personalization_enabled boolean default false
active boolean default true
seo_title text
seo_description text
created_at timestamptz default now()
updated_at timestamptz default now()
```

## 5. orders

```sql
id uuid primary key
customer_id uuid references customers(id)
status text not null
payment_status text not null
total integer not null
subtotal integer not null
shipping_total integer default 0
discount_total integer default 0
currency text default 'BRL'
utm_source text
utm_medium text
utm_campaign text
utm_content text
utm_term text
pagarme_order_id text
pagarme_payment_link text
tracking_code text
created_at timestamptz default now()
updated_at timestamptz default now()
```

## 6. customers

```sql
id uuid primary key
name text not null
email text
phone text
document text
created_at timestamptz default now()
```

## 7. order_items

```sql
id uuid primary key
order_id uuid references orders(id)
product_id uuid references products(id)
product_name text not null
quantity integer not null
unit_price integer not null
total integer not null
customization jsonb
created_at timestamptz default now()
```

## 8. personalization_files

```sql
id uuid primary key
order_id uuid references orders(id)
order_item_id uuid references order_items(id)
file_name text not null
storage_path text not null
mime_type text
size_bytes integer
created_at timestamptz default now()
```

## 9. payment_transactions

```sql
id uuid primary key
order_id uuid references orders(id)
gateway text default 'pagarme'
gateway_order_id text
gateway_charge_id text
gateway_transaction_id text
status text
amount integer
payload jsonb
created_at timestamptz default now()
updated_at timestamptz default now()
```

## 10. webhook_events

```sql
id uuid primary key
gateway text default 'pagarme'
event_id text unique
order_id uuid references orders(id)
event_type text
payload jsonb
processed boolean default false
created_at timestamptz default now()
```

## 11. Observações

No MVP, não é obrigatório implementar todas as tabelas imediatamente. A modelagem serve como direção para não criar estrutura quebrada.
