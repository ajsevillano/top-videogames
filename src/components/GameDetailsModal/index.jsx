//Styles & animations
import {
  StyledModal,
  StyledDetail,
  StyledStats,
  StyledMedia,
  StyledDescription,
} from './GameDetailsModal.styles';

//Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Utils
import useResizeImage from '../../utils/useResizeImage';
import { exitDetailHandler } from './GameDetailsModal.utils';
import Platforms from './Platforms';
import Rating from './Rating';

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
              <Rating name={game.name} rating={game.rating} />
              <Platforms state={game.parent_platforms} loading={isLoading} />
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
