import axios from "axios";

export const aboutUsAction = () => (dispatch) => {
  try {
    dispatch({ type: "ABOUT_US_REQUEST" });

    setTimeout(async () => {
      const { data } = await axios.get("aboutus");

      dispatch({
        type: "ABOUT_US_SUCCESS",
        payload: data,
      });
    }, 2000);
  } catch (error) {
    throw new Error("Error Nout Found Data....(Blogs)");
  }
};
