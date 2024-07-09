import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync.js";
import sendResponse from "./../../util/sendResponse.js";

import { paymentServices } from "./payment.service.js";

// ! create payment into database
const createPayment = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await paymentServices.createPaymentIntoDB(data);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Payment done successfully!!",
    data: result,
  });
});

//

export const paymentController = {
  createPayment,
};
