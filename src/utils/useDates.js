//Dates handler
const useDates = () => {
  const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
  };

  const getCurrentDay = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}` : day;
  };

  const getCurrentYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  const lastYear = `${
    getCurrentYear() - 1
  }-${getCurrentMonth()}-${getCurrentDay()}`;

  const nextYear = `${
    getCurrentYear() + 1
  }-${getCurrentMonth()}-${getCurrentDay()}`;

  const currentDate = `${getCurrentYear()}-${getCurrentMonth()}-${getCurrentDay()}`;

  return [lastYear, nextYear, currentDate];
};

export default useDates;
