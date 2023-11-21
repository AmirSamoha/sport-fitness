import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/users.js";

dotenv.config();

const app = express();

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

app.post("/post", (req, res) => {
  console.log(req.body);
  const { data } = req.body;

  try {
    if (data === "amir") {
      res.send({ status: "success", data: data });
    } else {
      res.send({ status: "User not found" });
    }
  } catch (error) {
    res.send({ status: "something went wrong trying again" });
  }
});

app.post("/register", async (req, res) => {
  const { username, email, phoneNumber } = req.body;
  try {
    await User.create({
        username: username,
        email: email,
        phoneNumber: phoneNumber,
    });
    res.send({ status: "success created new user" });
  } catch (error) {
    res.send({ status: "error to created new user" });
  }
});
