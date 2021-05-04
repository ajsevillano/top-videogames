const initialState = { game: {}, screenshot: {} };

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
