import axios from "axios";

export const brandListMainActions = () => async (dispatch) => {
  try {
    dispatch({ type: "BRAND_LIST_REQUEST" });

    const { data } = await axios.get("brand");

    dispatch({
      type: "BRAND_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    throw new Error("Error Nout Found data....");
  }
};
