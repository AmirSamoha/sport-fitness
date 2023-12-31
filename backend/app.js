import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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

  const userExist = await User.findOne({ email: email }).collation({
    locale: "en",
    strength: 2,
  });
  if (userExist) {
    return res
      .status(401)
      .json({ message: `username or email already exists` });
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

app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email: email }).collation({
    locale: "en",
    strength: 2,
  });

  if (!userExist) {
    return res.status(404).send({ status: "User not found" });
  }

  if (bcrypt.compareSync(password, userExist.password)) {
    const token = jwt.sign({ email: userExist.email }, process.env.JWT_SECRET, {
      expiresIn: "10hr",
    });

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error to login" });
    }
  }
  res.json({ status: "Invalid Token" });
});

app.post("/userVerify", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    if (user === "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const userEmail = user.email;
    const data = await User.findOne({ email: userEmail }).collation({
      locale: "en",
      strength: 2,
    });

    res.status(200).send({ status: "ok", data: data });
  } catch (error) {
    console.error("Error during user verification:", error);
    res.status(500).send({ status: "error", data: error.message });
  }
});
