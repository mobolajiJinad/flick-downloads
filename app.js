require("express-async-errors");
require("dotenv").config({ path: "./config/config.env" });

const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user/user");
const authenticate = require("./middleware/authentication");
const { errorHandler, notFound } = require("./middleware/error-handler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", authenticate, userRoutes);

app.use(errorHandler);
app.use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("Database connected successfully");

  // Start listening on the port after the database connection is established
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

start();
