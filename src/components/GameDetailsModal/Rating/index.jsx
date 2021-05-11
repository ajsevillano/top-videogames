import { getRating } from './Rating.utils';

const Rating = ({ name, rating }) => {
  return (
    <div className="rating">
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>{getRating(rating)}</p>
    </div>
  );
};

export default Rating;
