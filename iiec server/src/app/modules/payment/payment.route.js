import { Router } from "express";

import validateRequest from "./../../middleware/validateRequest.js";
import { paymentValidations } from "./payment.validation.js";
import { paymentController } from "./payment.controller.js";

const router = Router();

// ! for creating a payment
router.post(
  "/create-payment",
  validateRequest(paymentValidations.createPaymentValidationSchema),
  paymentController.createPayment
);

export const paymentRouter = router;
