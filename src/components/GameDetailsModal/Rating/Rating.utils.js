import { BsStar, BsStarFill } from 'react-icons/bs';

//Convert game rating from text to react-icons icons
export const getRating = (gameRating) => {
  const stars = [];
  const roundRating = Math.floor(gameRating);
  for (let i = 1; i <= 5; i++) {
    i <= roundRating
      ? stars.push(<BsStarFill key={i} color="#ff7676" />)
      : stars.push(<BsStar key={i} color="#ff7676" />);
  }
  return stars;
};
