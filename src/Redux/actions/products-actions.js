import axios from "axios";

export const ProductTypeListActions = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_TYPE_LIST_REQUEST" });

    const { data } = await axios.get("productsType");

    dispatch({
      type: "PRODUCTS_TYPE_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log("errrrror");
  }
};

export const ProductTypeListForIdActions = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_TYPE_LIST_ID_REQUEST" });

    const { data } = await axios.get("productsType");

    dispatch({
      type: "PRODUCTS_TYPE_LIST_ID_SUCCESS",
      payload: data.find((a) => a.id == id),
    });
  } catch (err) {
    console.log("errrrror");
  }
};

export const ProductTypeListSwiperActions = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_TYPE_SWIPER_LIST_REQUEST" });

    const { data } = await axios.get("productsType");

    dispatch({
      type: "PRODUCTS_TYPE_SWIPER_LIST_SUCCESS",
      payload: data,
    });
  } catch (err) {
    console.log("errrrror");
  }
};

export const ProductListMainActions = () => (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_LIST_MAIN_REQUEST" });
    setTimeout(async () => {
      const { data } = await axios.get("products");
      dispatch({
        type: "PRODUCTS_LIST_MAIN_SUCCESS",
        payload: data,
      });
    }, 2000);
  } catch (err) {
    console.log("errrrror");
  }
};

export const ProductListSpecialActions = () => (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_LIST_MAIN_REQUEST" });
    setTimeout(async () => {
      const { data } = await axios.get("products");
      dispatch({
        type: "PRODUCTS_LIST_MAIN_SUCCESS",
        payload: data,
      });
    }, 2000);
  } catch (err) {
    console.log("errrrror");
  }
};

export const ProductListPopularActions = () => (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_LIST_MAIN_REQUEST" });
    setTimeout(async () => {
      const { data } = await axios.get("products");
      dispatch({
        type: "PRODUCTS_LIST_MAIN_SUCCESS",
        payload: data,
      });
    }, 2000);
  } catch (err) {
    console.log("errrrror");
  }
};

export const productsList = (id) => (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_LIST_MAIN_REQUEST" });
    setTimeout(async () => {
      const { data } = await axios.get("products");
      if (id) {
        dispatch({
          type: "PRODUCTS_LIST_MAIN_SUCCESS",
          payload: data.filter((a) => a.productsTypeId == id),
        });
      } else {
        dispatch({
          type: "PRODUCTS_LIST_MAIN_SUCCESS",
          payload: data,
        });
      }
    }, 2000);
  } catch (error) {
    throw new Error("Error Data (ProductList)");
  }
};

export const productsDetailsActions = (id) => (dispatch) => {
  try {
    dispatch({ type: "PRODUCTS_DETAILS_REQUEST" });
    setTimeout(async () => {
      const { data } = await axios.get("products");
      dispatch({
        type: "PRODUCTS_DETAILS_SUCCESS",
        payload: data.find((a) => a.id == id),
      });
    }, 2000);
  } catch (error) {
    throw new Error("Error Data (ProductDetails)");
  }
};
