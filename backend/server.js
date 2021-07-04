const express = require("express");
const products = require("./data/products");
const app = express();
const port = 5000;

app.get("/api/products", (req, res) => res.json(products));

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product._id === id);
  res.json(product);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
