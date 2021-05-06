//Icons
import { BsStar, BsStarFill } from 'react-icons/bs';
import {
  SiSteam,
  SiPlaystation,
  SiXbox,
  SiNintendoswitch,
  SiApple,
  SiIos,
  SiLinux,
} from 'react-icons/si';

//Handle closing modal on click outside of it
const overflowAuto = (history) => {
  history.push('/');
  return (document.body.style.overflow = 'auto');
};
export const exitDetailHandler = (e, history) => {
  e.target.classList.contains('shadow') && overflowAuto(history);
};

//Convert game rating from text to react-icons icons
export const getRating = (gameRating) => {
  const stars = [];
  const roundRating = Math.floor(gameRating);
  for (let i = 1; i <= 5; i++) {
    i <= roundRating
      ? stars.push(<BsStarFill color="#ff7676" />)
      : stars.push(<BsStar color="#ff7676" />);
  }
  return stars;
};

//Conver platform text to react-icons icons
export const getPlatformIcon = (platform, id) => {
  switch (platform) {
    case 'PC':
      return <SiSteam size={32} key={id} />;
    case 'PlayStation':
      return <SiPlaystation size={32} key={id} />;
    case 'Xbox':
      return <SiXbox size={32} key={id} />;
    case 'Nintendo':
      return <SiNintendoswitch size={32} key={id} />;
    case 'iOS':
      return <SiIos size={32} key={id} />;
    case 'Linux':
      return <SiLinux size={32} key={id} />;
    case 'Apple Macintosh':
      return <SiApple size={32} key={id} />;

    default:
      return null;
  }
};
