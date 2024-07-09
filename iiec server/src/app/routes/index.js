import { Router } from "express";
import { userRouter } from "../modules/user/user.route.js";

const router = Router();

const modularRouter = [
  {
    path: "/users",
    route: userRouter,
  },
];

modularRouter.forEach((route) => {
  router.use(route.path, route.route);
});

export const mainRouter = router;
