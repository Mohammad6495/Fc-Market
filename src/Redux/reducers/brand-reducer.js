const initialState = {
  brand: [],
};

export const brandListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BRAND_LIST_REQUEST":
      return { loading: true, brand: [] };
    case "BRAND_LIST_SUCCESS":
      return { loading: false, brand: action.payload };
    default:
      return state;
  }
};
