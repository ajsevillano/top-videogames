const initialState = { game: {}, screenShot: {} };

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL':
      return {
        ...state,
        game: action.payload.game,
        screenShot: action.payload.screenShot,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;
