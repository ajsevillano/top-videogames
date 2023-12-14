import useDates from './useDates';

const useApi = () => {
  const [lastYear, nextYear, currentDate] = useDates();

  //Api configuration: URL,Api key & filters
  const baseURL = '/.netlify/functions';
  const itemsPerPage = 10;

  const API_URLS = {
    all: `${baseURL}/all`,
    search: `${baseURL}/search`,
    details: `${baseURL}/gamedetails`,
  };

  const API_FILTERS = {
    popularGames: `?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${itemsPerPage}`,
    upcomingGames: `?dates=${currentDate},${nextYear}&ordering=-added&page_size=${itemsPerPage}`,
    newGames: `?dates=${lastYear},${currentDate}&ordering=-release&page_size=${itemsPerPage}`,
  };

  const FINAL_ENDPOINTS = {
    homeURLs: {
      popularGames: `${API_URLS.all}${API_FILTERS.popularGames}`,
      upcomingGames: `${API_URLS.all}${API_FILTERS.upcomingGames}`,
      newGames: `${API_URLS.all}${API_FILTERS.newGames}`,
    },
    gameDetailsURL: (game_id) => `${API_URLS.details}?game_id=${game_id}`,
    searchGameURL: (game_name) =>
      `${API_URLS.search}?game_name=${game_name}&page_size=${itemsPerPage}`,
  };

  return {
    gameDetailsURL: FINAL_ENDPOINTS.gameDetailsURL,
    homeURLs: FINAL_ENDPOINTS.homeURLs,
    searchGameURL: FINAL_ENDPOINTS.searchGameURL,
  };
};

export default useApi;
