import axios from "axios";

export const employeeListActions = () => async (dispatch) => {
  try {
    dispatch({ type: "EMPLOYEES_LIST_REQUEST" });
    const { data } = await axios.get("employees");
    dispatch({
      type: "EMPLOYEES_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({ type: "EMPLOYEES_LIST_ERROR" });
  }
};
