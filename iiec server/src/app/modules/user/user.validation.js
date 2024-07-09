import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    phone: z.number(),
  }),
});

//
export const userValidations = {
  createUserValidationSchema,
};
