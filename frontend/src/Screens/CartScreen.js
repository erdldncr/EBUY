import React from "react";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
const CartScreen = ({ match, location, history }) => {
  const productId = math.params.id;
  const qty = location.search ? +location.search.split("=")[1] : 1;

  return <div>Cart</div>;
};

export default CartScreen;
