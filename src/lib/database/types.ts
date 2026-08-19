export type DatabaseUuid = string;
export type DatabaseTimestamp = string;
export type DatabaseJson = Record<string, unknown>;

export type OrderStatus =
  | "new"
  | "awaiting_payment"
  | "paid"
  | "in_production"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentStatus = "pending" | "approved" | "refused" | "cancelled" | "refunded";
export type PaymentGateway = "pagarme";
export type CouponDiscountType = "percentage" | "fixed_amount";
export type AdminRole = "admin" | "operator";

export interface DatabaseCategory {
  id: DatabaseUuid;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  active: boolean;
  sort_order: number;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseProduct {
  id: DatabaseUuid;
  category_id: DatabaseUuid | null;
  name: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  price: number;
  compare_at_price: number | null;
  currency: string;
  active: boolean;
  featured: boolean;
  personalization_config: DatabaseJson;
  metadata: DatabaseJson;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseProductImage {
  id: DatabaseUuid;
  product_id: DatabaseUuid;
  src: string;
  alt: string | null;
  width: number | null;
  height: number | null;
  sort_order: number;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseCustomer {
  id: DatabaseUuid;
  full_name: string;
  email: string;
  phone: string | null;
  document: string | null;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseOrder {
  id: DatabaseUuid;
  order_number: string;
  customer_id: DatabaseUuid | null;
  coupon_id: DatabaseUuid | null;
  shipping_method_id: DatabaseUuid | null;
  status: OrderStatus;
  payment_status: PaymentStatus;
  currency: string;
  subtotal: number;
  discount_total: number;
  shipping_total: number;
  total: number;
  shipping_address: DatabaseJson;
  customer_notes: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  fbclid: string | null;
  gclid: string | null;
  pagarme_order_id: string | null;
  pagarme_checkout_url: string | null;
  tracking_code: string | null;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseOrderItem {
  id: DatabaseUuid;
  order_id: DatabaseUuid;
  product_id: DatabaseUuid | null;
  product_name: string;
  product_slug: string | null;
  unit_price: number;
  quantity: number;
  total: number;
  customization: DatabaseJson;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabasePersonalizationFile {
  id: DatabaseUuid;
  order_id: DatabaseUuid;
  order_item_id: DatabaseUuid;
  bucket_name: string;
  original_file_name: string;
  storage_path: string;
  mime_type: string;
  file_size: number;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseCoupon {
  id: DatabaseUuid;
  code: string;
  description: string | null;
  discount_type: CouponDiscountType;
  discount_value: number;
  minimum_order_amount: number | null;
  usage_limit: number | null;
  usage_count: number;
  starts_at: DatabaseTimestamp | null;
  expires_at: DatabaseTimestamp | null;
  active: boolean;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseShippingMethod {
  id: DatabaseUuid;
  name: string;
  code: string;
  description: string | null;
  price: number;
  estimated_days_min: number | null;
  estimated_days_max: number | null;
  active: boolean;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabasePaymentTransaction {
  id: DatabaseUuid;
  order_id: DatabaseUuid;
  gateway: PaymentGateway;
  external_transaction_id: string | null;
  external_charge_id: string | null;
  status: PaymentStatus;
  amount: number;
  currency: string;
  payload: DatabaseJson;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseAdminUser {
  id: DatabaseUuid;
  email: string;
  full_name: string | null;
  role: AdminRole;
  active: boolean;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}

export interface DatabaseWebhookEvent {
  id: DatabaseUuid;
  gateway: PaymentGateway;
  external_event_id: string;
  event_type: string;
  order_id: DatabaseUuid | null;
  payload: DatabaseJson;
  processed_at: DatabaseTimestamp | null;
  created_at: DatabaseTimestamp;
  updated_at: DatabaseTimestamp;
}
