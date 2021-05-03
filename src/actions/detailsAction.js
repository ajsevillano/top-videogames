import axios from 'axios';
import useApi from '../utils/useApi';

export const loadDetail = (id) => async (dispatch) => {
  const key = process.env.REACT_APP_API_KEY;
  const gameDetailsURL = (game_id) =>
    `https://api.rawg.io/api/games/${game_id}.json?&key=${key}`;
  //FETCH AXIOS
  const detailData = await axios.get(gameDetailsURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
    },
  });
};
