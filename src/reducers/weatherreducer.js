const weatherReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_WEATHER":
      return { ...state, payload };

    default:
      return state;
  }
};
export default weatherReducer;
