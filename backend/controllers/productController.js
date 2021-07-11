import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

//desc fetch all produccts
//@route get api/prodducts
//@access publicc
export const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find();

  return res.status(200).json(products);
});

//desc fetch single produccts
//@route get api/prodducts/:id
//@access publicc
export const getProductById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (product) {
    return res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found"); ///error olusturdm middleware erroru yakaliyr
  }
});
