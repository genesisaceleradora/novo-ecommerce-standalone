import type {
  DatabaseCustomer,
  DatabaseOrder,
  DatabaseOrderItem,
  DatabasePersonalizationFile,
} from "@/lib/database/types";

/** A future server-side command, independent from the current mock checkout. */
export interface CreatePersistedOrderInput {
  customer: Pick<DatabaseCustomer, "full_name" | "email" | "phone" | "document">;
  shippingAddress: DatabaseOrder["shipping_address"];
  customerNotes?: string;
  items: Array<
    Pick<
      DatabaseOrderItem,
      "product_id" | "product_name" | "product_slug" | "unit_price" | "quantity" | "total" | "customization"
    >
  >;
}

export interface PersistedOrderAggregate {
  order: DatabaseOrder;
  items: DatabaseOrderItem[];
  personalizationFiles: DatabasePersonalizationFile[];
}
