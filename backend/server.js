import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => res.json(products));

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product._id === id);
  res.json(product);
});

app.listen(port, () =>
  console.log(
    `Example app listening in ${process.env.NODE_ENV} on port ${port}!`.yellow
      .bold
  )
);
