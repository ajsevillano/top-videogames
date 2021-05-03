const initialState = { game: {} };

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: action.payload.game,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
