import axios from 'axios';
import useApi from '../utils/useApi';

export const loadGames = () => async (dispatch) => {
  const { homeURLs } = useApi();
  const { popularGames, upcomingGames, newGames } = homeURLs;

  //FETCH AXIOS
  const popularData = await axios.get(popularGames);
  const upcomingData = await axios.get(upcomingGames);
  const newGamesData = await axios.get(newGames);

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data,
      upcoming: upcomingData.data,
      newGames: newGamesData.data,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const { searchGameURL } = useApi();
  const searchFetch = await axios.get(searchGameURL(game_name));

  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchFetch.data,
    },
  });
};
