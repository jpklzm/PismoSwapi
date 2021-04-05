const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
