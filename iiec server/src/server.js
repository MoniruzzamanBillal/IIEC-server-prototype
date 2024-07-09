import mongoose from "mongoose";
import app from "./app.js";

async function Main() {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    app.listen(5000, () => {
      console.log(`listening from port 5000`);
    });
  } catch (error) {
    console.log(error);
  }
}

Main();
