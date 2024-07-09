import mongoose from "mongoose";
import app from "./app.js";
import "dotenv/config";

async function Main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    app.listen(process.env.PORT, () => {
      console.log(`listening from port ${process.env.PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
}

Main();
