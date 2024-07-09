import { Router } from "express";
import { userController } from "./user.controller.js";
import validateRequest from "./../../middleware/validateRequest.js";
import { userValidations } from "./user.validation.js";

const router = Router();

// ! for getting all users
router.get("/", userController.getUsers);

// ! for creating a user
router.post(
  "/create-user",
  validateRequest(userValidations.createUserValidationSchema),
  userController.createUser
);

export const userRouter = router;
