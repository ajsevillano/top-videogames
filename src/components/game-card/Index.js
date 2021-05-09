//Styles & animations
import StyledGame from './game-card.styles';

//Redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../../actions/detailsAction';

//Utils
import resizeImage from '../../utils/resizeImage';

//Router
import { Link } from 'react-router-dom';

const GameCard = ({ name, release, image, id, screenshots }) => {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id, screenshots));
    document.body.style.overflow = 'hidden';
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{release}</p>
        <img src={resizeImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

export default GameCard;
