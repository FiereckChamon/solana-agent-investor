import { z } from "zod";

export const searchSchema = z.object({
    query: z.string()
});

export const getTopPoolsSchema = z.object({
    sort: z.enum(["asc", "desc"]).default("desc").nullable(),
    order_by: z.enum(["volume_usd", "price_usd", "transactions", "last_price_change_usd_24h", "created_at"]).default("volume_usd").nullable()
});