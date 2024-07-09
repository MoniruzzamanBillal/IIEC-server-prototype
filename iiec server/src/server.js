import mongoose from "mongoose";
import app from "./app.js";
import "dotenv/config";

async function Main() {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    app.listen(process.env.PORT, () => {
      console.log(`listening from port ${process.env.PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
}

Main();
