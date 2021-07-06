import express from "express";

import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
dotenv.config();

connectDB();

const app = express();

app.use("/api/products", productRouter);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(
    `Example app listening in ${process.env.NODE_ENV} on port ${port}!`.yellow
      .bold
  )
);
