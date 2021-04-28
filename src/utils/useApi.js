import useDates from './useDates';

const useApi = () => {
  const [lastYear, currentDate] = useDates();

  //Api configuration: URL,Api key & filters
  const baseUrl = 'https://api.rawg.io/api/';
  const key = process.env.REACT_APP_API_KEY;
  const order = '-rating&page_size=10';

  //Popular games filter
  const popularGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=${order}`;
  //Popular games url
  const popularGamesURL = `${baseUrl}${popularGames}`;

  return [popularGamesURL];
};

export default useApi;
