import mongoose, { mongo, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required!!"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required!!"],
  },
  phone: {
    type: Number,
    required: [true, "phone number is required!!"],
  },
});

export const userModel = mongoose.model("User", userSchema);
