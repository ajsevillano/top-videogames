//Icons
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
