//Dates handler

//Month
export const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

//Day
export const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

//Year
export const getCurrentYear = () => {
  const year = new Date().getFullYear();
  return year;
};
