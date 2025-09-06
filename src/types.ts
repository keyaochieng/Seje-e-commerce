import {z} from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    images: Record<string,string>;

}

export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    quantity:number;
    selectedSize:string;
}

export type CartItemsType = CartItemType[]

//react hook shipping form schema using zod
export const shippingFormSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.email().min(1, "Email is required!"),
    phone: z
    .string()
    .min(10,"Phone number must be 10 digits!")
    .max(10,"Phone number must be 10 digits!")
    .regex(/^\d+$/, "Phone number must contain only digits!"),
    address: z.string().min(1,"Address is required!"),

});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;


// Zod schema for the M-Pesa payment form
export const paymentFormSchema = z.object({
    mpesaPhone: z
      .string()
      .min(1, "M-Pesa phone number is required!") // Ensure it's not empty
      .regex(/^(254\d{9})$/, "Phone number must be in the format 254xxxxxxxxx"), // Strict format for Kenya
  });
  
  // The inferred type from the schema
  export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;