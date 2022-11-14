import axios from "axios";

export const blogsListMainAction = () => (dispatch) => {
  try {
    dispatch({ type: "BLOG_LIST_REQUEST" });

    setTimeout(async () => {
      const { data } = await axios.get("blogs");

      dispatch({
        type: "BLOG_LIST_SUCCESS",
        payload: data,
      });
    }, 2000);
  } catch (error) {
    throw new Error("Error Nout Found Data....(Blogs)");
  }
};
