import useDates from './useDates';

const useApi = () => {
  const [lastYear, currentDate] = useDates();

  //Bare URL
  const baseUrl = 'https://api.rawg.io/api/';
  //Popular games filter
  const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
  //Popular games url
  const popularGamesURL = `${baseUrl}${popularGames}`;

  return [popularGamesURL];
};

export default useApi;
