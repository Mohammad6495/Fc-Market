import axios from "axios";

export const companyInformationsActions = () => (dispatch) => {
  try {
    dispatch({ type: "GET_INFORMATION_COMPANY_REQUEST" });
    setTimeout(async () => {
      const { data } = await axios.get("companyInformations");
      dispatch({
        type: "GET_INFORMATION_COMPANY_SUCCESS",
        payload: data,
      });
    }, 2000);
  } catch (error) {
    dispatch({ type: "GET_INFORMATION_COMPANY_ERROR" });
  }
};
export const contactUsFormActions = (item) => async (dispatch) => {
  try {
    dispatch({ type: "CONTACT_US_FORM_REQUEST" });
    await axios.post("contactUs", item).then((response) => {
      dispatch({
        type: "CONTACT_US_FORM_SUCCESS",
        payload: response.data,
      });
    });
  } catch (error) {
    dispatch({ type: "CONTACT_US_FORM_ERROR" });
  }
};
