import { Router } from "express";
import { userRouter } from "../modules/user/user.route.js";
import { paymentRouter } from "../modules/payment/payment.route.js";

const router = Router();

const modularRouter = [
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/payment",
    route: paymentRouter,
  },
];

modularRouter.forEach((route) => {
  router.use(route.path, route.route);
});

export const mainRouter = router;
