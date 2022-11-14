const initialState = {
  future: [],
};

export const futureListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FUTURE_LIST_REQUEST":
      return { loading: true, future: [] };
    case "FUTURE_LIST_SUCCESS":
      return { loading: false, future: action.payload };
    default:
      return state;
  }
};
