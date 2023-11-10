import { z } from "zod";
// email: email!,
// emailVerified,
// phoneNumber,
// role: "user",
// userName: displayName!,
// uid
export const userSchema = z.object({
  email: z.string().email(),
  emailVerified: z.boolean().default(false),
  phoneNumber: z.union([z.number(), z.null()]).default(null),
  role: z.union([z.literal("user"), z.literal("admin")]).default("user"),
  userName: z.string().default("Unknown"),
  uid: z.string(),
});

export const productSchema = z.object({
  title: z.string().default("Без названия"),
  description: z.string().default("Без описания"),
  discount: z.boolean().default(false),
  discountPrice: z.number().default(0),
  id: z.string(),
  img: z.union([
    z.null(),
    z.object({
      url: z.string().default(""),
      path: z.string().default(""),
    }),
  ]),
  price: z.number().default(0),
  status: z.boolean().default(false),
  type: z.string().default("unknown"),
});

export const orderSchema = z.object({
  id: z.string(),
  customerId: z.union([z.string(), z.null()]),
  status: z.union([
    z.literal("на проверке"),
    z.literal("в ожидании отправки"),
    z.literal("отправлено"),
    z.literal("отменено"),
  ]),
  email: z.string().email(),
  userName: z.string(),
  phoneNumber: z.number(),
  country: z.union([
    z.literal("Netherlands"),
    z.literal("Luxembourg"),
    z.literal("Germany"),
    z.literal("France"),
    z.literal("Belgium"),
  ]),
  telegram: z.string(),
  totalPrice: z.number(),
  createdAt: z.date(),
  delivery: z.discriminatedUnion("shippingMethod", [
    z.object({
      shippingMethod: z.literal("PNL"),
      price: z.number(),
      postcode: z.number(),
      city: z.string(),
      street: z.string(),
      apartment: z.number(),
      house: z.number(),
    }),
    z.object({
      shippingMethod: z.literal("COUNTRY"),
      price: z.number(),
      postcode: z.number(),
      city: z.string(),
      street: z.string(),
      apartment: z.number(),
      house: z.number(),
    }),
    z.object({ shippingMethod: z.literal("HAND"), price: z.literal(0) }),
  ]),
  promo: z.union([
    z.null(),
    z.object({
      isActive: z.boolean(),
      promo: z.string(),
      priceWithoutPromo: z.number(),
    }),
  ]),
});

export const promoSchema = z.object({
  name: z.string(),
  discount: z.union([z.string(), z.number()]),
});

export type TOrderType = z.infer<typeof orderSchema>;
export type TUser = z.infer<typeof userSchema>;
export type TProduct = z.infer<typeof productSchema>;
export type TPromo = z.infer<typeof promoSchema>;
