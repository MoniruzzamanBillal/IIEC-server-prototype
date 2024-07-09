import mongoose, { mongo, Schema } from "mongoose";

const paymentSchema = new Schema({
  email: {
    type: String,
    required: [true, "email is required!!"],
    unique: true,
  },
  amount: {
    type: Number,
    required: [true, "amount is required!!"],
  },
});

export const paymentModel = mongoose.model("Payment", paymentSchema);
