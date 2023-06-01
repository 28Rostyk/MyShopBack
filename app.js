require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const {
  authRouter,
  ordersRouter,
  shopsRouter,
  productsRouter,
  couponsRouter,
} = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/shops", shopsRouter);
app.use("/api/products", productsRouter);
app.use("/api/coupons", couponsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
