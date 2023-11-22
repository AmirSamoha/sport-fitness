import mongoose from "mongoose";

const userScehma = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    password: String,
  },
  {
    collation: "UserInfo",
    timestamps: true,
  }
);

const User = mongoose.model("UserInfo", userScehma);
export default User;
