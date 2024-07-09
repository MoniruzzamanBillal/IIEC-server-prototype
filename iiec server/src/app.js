import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import globalErrorHandler from "./app/middleware/globalErrorHandler.js";
import { mainRouter } from "./app/routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", async (req, res, next) => {
  try {
    res.send({ message: "IIEC server is running  !! " });
  } catch (error) {
    next(error);
  }
});

app.use("/api/v1", mainRouter);

//   ! not found route
app.all("*", async (req, res) => {
  res.status(400).json({ success: false, message: "Route not found " });
});

// ! global error handler
app.use(globalErrorHandler);

export default app;
