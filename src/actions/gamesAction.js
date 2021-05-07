import axios from 'axios';
import useApi from '../utils/useApi';

export const loadGames = () => async (dispatch) => {
  const [, popularGamesURL, upcomingGamesURL, newGamesURL] = useApi();
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL);
  const upcomingData = await axios.get(upcomingGamesURL);
  const newGamesData = await axios.get(newGamesURL);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const [, , , , searchGameURL] = useApi();
  const searchFetch = await axios.get(searchGameURL(game_name));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchFetch.data.results,
    },
  });
};
