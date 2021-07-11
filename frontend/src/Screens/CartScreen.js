import React from "react";
import { useParams } from "react-router-dom";

const CartScreen = () => {
  const { id } = useParams();

  return <div>Cart</div>;
};

export default CartScreen;
