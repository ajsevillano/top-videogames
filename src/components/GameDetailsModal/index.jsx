//Styles & animations
import {
  StyledModal,
  StyledDetail,
  StyledStats,
  StyledInfo,
  StyledPlatforms,
  StyledMedia,
  StyledDescription,
} from './GameDetailsModal.styles';

//Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Utils
import useResizeImage from '../../utils/useResizeImage';
import {
  exitDetailHandler,
  getPlatformIcon,
  getRating,
} from './GameDetailsModal.utils';

const GameDetailsModal = () => {
  //Extract data from Store
  const { game, screenshot, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();
  const resizeImg = useResizeImage(game.background_image, 1280);
  const ResizeScreenshot = (img, size) => useResizeImage(img, size);
  return (
    <>
      {!isLoading && (
        <StyledModal
          className="shadow"
          onClick={(e) => exitDetailHandler(e, history)}
        >
          <StyledDetail>
            <StyledStats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
                <p>{getRating(game.rating)}</p>
              </div>
              <StyledInfo>
                <h3>Platform</h3>
                <StyledPlatforms>
                  {game.parent_platforms?.map((data) =>
                    getPlatformIcon(data.platform.name, data.platform.id)
                  )}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img src={resizeImg} alt={game.background_image} />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
              {screenshot?.map((screenshots) => (
                <img
                  src={ResizeScreenshot(screenshots.image, 1280)}
                  key={screenshots.id}
                  alt="game"
                />
              ))}
            </div>
          </StyledDetail>
        </StyledModal>
      )}
    </>
  );
};

export default GameDetailsModal;
