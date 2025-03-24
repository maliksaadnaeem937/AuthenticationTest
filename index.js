const express = require("express");
require("dotenv").config();
require("./DBConnection/connection.js");
const cookieParser = require("cookie-parser");
const googleAuthRouter = require("./Routes/googleAuth.js");
const authRouter = require("./Routes/auth.js");
const passport = require("passport");
const passportSetup = require("./Helpers/passport.js");
const cors = require("cors");
const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use(passport.initialize());

app.use("/api", authRouter);

app.use("/auth", googleAuthRouter);

app.get("/", (req, res) => {
  res.send("Hello, how are you?");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
