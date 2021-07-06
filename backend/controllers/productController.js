import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

export const getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();
  return res.status(200).json(products);
});

export const getSingleProduct = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) {
    return res.status(200).json(product);
  } else {
    return res.status(404).json({
      message: "Product not found",
    });
  }
});
