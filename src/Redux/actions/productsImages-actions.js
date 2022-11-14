import axios from "axios";

export const productsImagesDetailsActios = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_IMAGES_REQUEST" });
    const { data } = await axios.get("productsImages");
    dispatch({
      type: "PRODUCTS_IMAGES_SUCCESS",
      payload: data.filter((a) => a.productsId == id),
    });
  } catch (error) {
    throw new Error("Error Nout Found Data(Products Images)");
  }
};
