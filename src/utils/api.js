import {
  currentYear,
  currentMonth,
  currentDay,
  currentDate,
  lastYear,
  nextYear,
} from '../utils/dates';

//Bare URL
const baseUrl = 'https://api.rawg.io/api/';

//Popular games filter
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Popular games url
export const popularGamesURL = () => `${baseUrl}${popularGames}`;
