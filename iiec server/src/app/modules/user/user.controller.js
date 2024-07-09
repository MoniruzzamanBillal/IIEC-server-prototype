import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync.js";
import sendResponse from "./../../util/sendResponse.js";

// ! get all  user
const getUsers = catchAsync(async (req, res) => {
  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "All users retrived successfully!!",
    data: "this is data !!!",
  });
});

//

export const userController = {
  getUsers,
};
