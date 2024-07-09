import { userModel } from "./user.model.js";

// ! create user
const createUserIntoDB = async (payload) => {
  console.log(payload);

  const result = await userModel.create(payload);
  return result;
};

//
export const userServices = {
  createUserIntoDB,
};
