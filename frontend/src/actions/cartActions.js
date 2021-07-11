import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`api/products/${id}`);

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        countInStock: data.countInStock,
        price: data.price,
        qty,
      },
    });
  } catch (error) {
    console.log("hata");
    console.log(error);
  }

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
