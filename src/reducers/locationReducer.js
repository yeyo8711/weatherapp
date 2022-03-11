const locationReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_LOCATION":
      return { ...state, payload };
    default:
      return state;
  }
};
export default locationReducer;
