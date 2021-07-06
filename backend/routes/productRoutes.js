import express from "express";
const router = express.Router();

router.get("/", (req, res) => res.json(products));

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product._id === id);
  res.json(product);
});

export default router;
