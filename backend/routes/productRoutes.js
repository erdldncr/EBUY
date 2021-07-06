import express from "express";
import {
  getAllProducts,
  getSingleProduct,
} from "../controllers/productController.js";
const router = express.Router();

//desc fetch all produccts
//@route get api/prodducts
//@access publicc
router.get("/", getAllProducts);

//desc fetch single produccts
//@route get api/prodducts/:id
//@access publicc

router.get("/:id", getSingleProduct);

export default router;
