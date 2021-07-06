import express from "express";

import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
dotenv.config();

connectDB();

const app = express();


app.use(req,res,next)=>{
  
}

app.use("/api/products", productRouter);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(
    `Example app listening in ${process.env.NODE_ENV} on port ${port}!`.yellow
      .bold
  )
);
