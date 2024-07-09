import axios from "axios";
import { paymentModel } from "./payment.model.js";

// ! create payment
const createPaymentIntoDB = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/receive-data",
      payload
    );

    if (response?.data) {
      const result = await paymentModel.create(payload);
      return result;
    }
  } catch (error) {
    throw new Error(error);
  }
};

//
export const paymentServices = {
  createPaymentIntoDB,
};
