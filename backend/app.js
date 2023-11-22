import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";
import User from "./models/users.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect success to database");
  })
  .catch((err) => {
    console.log(`Error connecting to database: ${err}`);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server runnig on http://localhost:${port}`);
});

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const bcryptPassword = await bcrypt.hash(password, 10);
  const userExist = await User.findOne({ email: email }).collation({ locale: 'en', strength: 2 });
  if (userExist) {
    return res.status(401).json({ message: `username or email already exists` });
  }

  try {
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: bcryptPassword,
    });
    return res.send({ status: "success created new user" });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).send({ status: "error to create new user" });
  }
});

// app.post("/register", async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;

//   try {
//     await User.create({
//       firstName,
//       lastName,
//       email,
//       password,
//     });
//     res.send({ status: "success created new user" });
//   } catch (error) {
//     res.send({ status: "error", error });
//   }
// });
