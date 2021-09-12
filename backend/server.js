import express from "express";

import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/order", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(
    `Example app listening in ${process.env.NODE_ENV} on port ${port}!`.yellow
      .bold
  )
);
