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
import { exitDetailHandler, getPlatformIcon } from './game-details.utils';

import { BsStar, BsStarFill } from 'react-icons/bs';

const GameDetails = () => {
  //Extract data from Store
  const { game, screenshot, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();

  const getRating = () => {
    const stars = [];
    const roundRating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      i <= roundRating
        ? stars.push(<BsStarFill color="#ff7676" />)
        : stars.push(<BsStar color="#ff7676" />);
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <Modal
          className="shadow"
          onClick={(e) => exitDetailHandler(e, history)}
        >
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                <p>{getRating()}</p>
              </div>
              <Info>
                <h3>Platform</h3>
                <Platforms>
                  {game.parent_platforms?.map((data) =>
                    getPlatformIcon(data.platform.name, data.platform.id)
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
