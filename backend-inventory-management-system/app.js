const express = require("express");
const router = require("./src/Routers/API");
const app = new express();
const bodyParser = require("body-parser");

// Security Middleware

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cores = require("cors");

// Database
const mongoose = require("mongoose");

// Env
const dotENV = require("dotenv");
dotENV.config();

// Security Middleware Implement
app.use(helmet());
app.use(mongSanitize());
app.use(xss());
app.use(hpp());
app.use(cores());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "100mb" }));

// BodyParser Implement
app.use(bodyParser.json());

//Rate Limit
const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 3000,
});
app.use(limiter);

// Database Connect

const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fsp0qs4.mongodb.net/inventory-project?retryWrites=true&w=majority`;

mongoose.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(" Mongoose is connected");
  }
);

// Front ENd Tagging API
app.use("/api/v1", router);

// Undefined Router Implement
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "Not Found" });
});

module.exports = app;
