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
import useResizeImage from '../../utils/useResizeImage';
import {
  exitDetailHandler,
  getPlatformIcon,
  getRating,
} from './game-details.utils';

const GameDetails = () => {
  //Extract data from Store
  const { game, screenshot, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();
  const resizeImg = useResizeImage(game.background_image, 1280);
  const ResizeScreenshot = (img, size) => useResizeImage(img, size);
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
                <p>{getRating(game.rating)}</p>
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
              <img src={resizeImg} alt={game.background_image} />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshot?.map((screenshots) => (
                <img
                  src={ResizeScreenshot(screenshots.image, 1280)}
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
