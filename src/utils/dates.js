//Dates handler

//Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

//Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

//Year
const getCurrentYear = () => {
  const year = new Date().getFullYear();
  return year;
};

//Exports
export const currentYear = getCurrentYear();
export const currentMonth = getCurrentMonth();
export const currentDay = getCurrentDay();
export const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
export const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
export const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
