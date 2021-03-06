import useDates from './useDates';

const useApi = () => {
  const [lastYear, nextYear, currentDate] = useDates();

  //Api configuration: URL,Api key & filters
  const baseUrl = 'https://api.rawg.io/api/';
  const key = process.env.REACT_APP_API_KEY;
  const orderPopularGames = '-rating';
  const orderUpcomingGames = '-added';
  const orderNewGAmes = '-release';
  const itemsPerPage = 10;

  //Games filter
  const popularGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=${orderPopularGames}&page_size=${itemsPerPage}`;
  const upcomingGames = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=${orderUpcomingGames}&page_size=${itemsPerPage}`;
  const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=${orderNewGAmes}&page_size=${itemsPerPage}`;

  //Game details
  const gameDetailsURL = (game_id) =>
    `https://api.rawg.io/api/games/${game_id}.json?&key=${key}`;

  //Search
  const searchGameURL = (game_name) =>
    `${baseUrl}games?key=${key}&search=${game_name}&page_size=${itemsPerPage}`;

  //Api filters URL
  const popularGamesURL = `${baseUrl}${popularGames}`;
  const upcomingGamesURL = `${baseUrl}${upcomingGames}`;
  const newGamesURL = `${baseUrl}${newGames}`;

  return [
    gameDetailsURL,
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchGameURL,
  ];
};

export default useApi;
