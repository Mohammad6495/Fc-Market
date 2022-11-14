import axios from "axios";

export const addCommentActions = (data) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_COMMENTS_REQUEST" });
    await axios.post("comments", data).then((response) => {
      dispatch({
        type: "ADD_COMMENTS_SUCCESS",
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({ type: "ADD_COMMENTS_ERROR" });
  }
};

export const commentDetailslist = (id) => async (dispatch) => {
  try {
    dispatch({ type: "COMMENT_LIST_REQUEST" });
    const { data } = await axios.get("comments");
    dispatch({
      type: "COMMENT_LIST_SUCCESS",
      payload: data.filter((a) => a.productId == id && a.statusView == true),
    });
  } catch (error) {
    dispatch({ type: "COMMENT_LIST_ERROR" });
  }
};
