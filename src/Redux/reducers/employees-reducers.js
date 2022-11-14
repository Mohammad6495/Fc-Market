const initialState = {
  employees: [],
};

export const employeeListReducers = (state = initialState, action) => {
  switch (action.type) {
    case "EMPLOYEES_LIST_REQUEST":
      return { loading: true, employees: [] };
    case "EMPLOYEES_LIST_SUCCESS":
      return { loading: false, employees: action.payload };
    case "EMPLOYEES_LIST_ERROR":
      return {
        loading: false,
        employees: [],
        message: "Error nout found Data",
      };
    default:
      return state;
  }
};
