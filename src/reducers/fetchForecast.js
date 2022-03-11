const fetchForecast = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_FORECAST":
      return { ...state, payload };

    default:
      return state;
  }
};

export default fetchForecast;
