import mongoose from "mongoose";

const userScehma = new mongoose.Schema(
  {
    username: String,
    email: String,
    phoneNumber: String,
  },
  {
    collation: "UserInfo",
    timestamps: true,
  }
);

const User = mongoose.model("UserInfo", userScehma);
export default User;
