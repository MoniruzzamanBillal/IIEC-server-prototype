import express from "express";
import cors from "cors";
import morgan from "morgan";

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

//   ! not found route
app.all("*", async (req, res) => {
  res.status(400).json({ success: false, message: "Route not found " });
});

export default app;
