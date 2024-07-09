import { z } from "zod";

const createPaymentValidationSchema = z.object({
  body: z.object({
    email: z.string(),
    amount: z.number(),
  }),
});

//
export const paymentValidations = {
  createPaymentValidationSchema,
};
