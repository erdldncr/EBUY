import axios from "axios";
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`api/products/${id}`);
  try {
  } catch (error) {}
};
