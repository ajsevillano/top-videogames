//Styles & animations
import {
  Modal,
  Detail,
  Stats,
  Info,
  Platforms,
  Media,
  Description,
} from './game-details.styles';
//Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Utils
import resizeImage from '../../utils/resizeImage';
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

const GameDetails = () => {
  //Extract data from Store
  const { game, screenshot, isLoading } = useSelector((state) => state.detail);

  const history = useHistory();

  const overflowAuto = () => {
    history.push('/');
    return (document.body.style.overflow = 'auto');
  };

  const exitDetailHandler = (e) => {
    e.target.classList.contains('shadow') && overflowAuto();
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'PC':
        return <SiSteam size={32} />;
      case 'PlayStation':
        return <SiPlaystation size={32} />;
      case 'Xbox':
        return <SiXbox size={32} />;
      case 'Nintendo':
        return <SiNintendoswitch size={32} />;
      case 'iOS':
        return <SiIos size={32} />;
      case 'Linux':
        return <SiLinux size={32} />;

      case 'Apple Macintosh':
        return <SiApple size={32} />;

      default:
        return null;
    }
  };

  return (
    <>
      {!isLoading && (
        <Modal className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platform</h3>
                <Platforms>
                  {game.parent_platforms?.map((data) =>
                    getPlatformIcon(data.platform.name)
                  )}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={resizeImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshot?.map((screenshots) => (
                <img
                  src={resizeImage(screenshots.image, 1280)}
                  key={screenshots.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </Modal>
      )}
    </>
  );
};

export default GameDetails;
