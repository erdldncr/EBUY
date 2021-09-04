import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

//desc Create new order
//@route POST  /api/orders
//@access private
export const addOrderItems = asyncHandler(async (req, res, next) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length == 0) {
    const error = new Error("No Order Items");
    res.status(400);
    next(error);
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json({
      createdOrder,
    });
  }

  return res.status(200).json(products);
});

//desc Get ordder by id
//@route GET  /api/orders/:id
//@access private
export const getOrderById = asyncHandler(async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      const error = new Error("Order not found");
      next(error);
    }
  } catch (error) {}
});
