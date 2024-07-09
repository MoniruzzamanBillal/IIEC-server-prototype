import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync.js";
import sendResponse from "./../../util/sendResponse.js";
import { userServices } from "./user.services.js";

// ! create user into database
const createUser = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await userServices.createUserIntoDB(data);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User created successfully!!",
    data: result,
  });
});

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
  createUser,
};
