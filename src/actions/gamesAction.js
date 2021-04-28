import axios from 'axios';
import useApi from '../utils/useApi';

export const loadGames = () => async (dispatch) => {
  const [popularGamesURL] = useApi();
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
    },
  });
};
