const initialState = {
  companyInfo: {},
  contactUs: [],
};

export const companyInformationsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFORMATION_COMPANY_REQUEST":
      return { loading: true, companyInfo: {} };
    case "GET_INFORMATION_COMPANY_SUCCESS":
      return { loading: false, companyInfo: action.payload };
    case "GET_INFORMATION_COMPANY_ERROR":
      return {
        loading: false,
        companyInfo: {},
        message: "Nout Found Data (CompanyInfo)",
      };
    default:
      return state;
  }
};

export const contactUsFormReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CONTACT_US_FORM_REQUEST":
      return { loading: true, contactUs: [], mes: "درحال ارسال اطلاعات" };
    case "CONTACT_US_FORM_SUCCESS":
      return {
        loading: false,
        contactUs: action.payload,
        mes: "پیغام شما با موفقیت ثبت شد",
      };
    case "CONTACT_US_FORM_ERROR":
      return {
        loading: false,
        contactUs: [],
        mes: "در هنگام ارسال اطلاعات خطایی رخ داده است",
      };
    default:
      return state;
  }
};