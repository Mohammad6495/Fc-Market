import axios from "axios";

export const futureListActions = (id) => async (dispatch) => {
  try {
    dispatch({ type: "FUTURE_LIST_REQUEST" });

    const { data } = await axios.get("future");

    dispatch({
      type: "FUTURE_LIST_SUCCESS",
      payload: data.filter((a) => a.productId == id),
    });
    
  } catch (error) {
    throw new Error("ERROR Data(future)");
  }
};
