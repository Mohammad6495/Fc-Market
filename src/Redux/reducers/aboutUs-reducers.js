const initialState = {
  aboutUs: [],
};

export const aboutUsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ABOUT_US_REQUEST":
      return { loading: true, aboutUs: [] };
    case "ABOUT_US_SUCCESS":
      return { loading: false, aboutUs: action.payload };
    default:
      return state;
  }
};
