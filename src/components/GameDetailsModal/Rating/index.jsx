const Rating = ({ name, rating, getRating }) => {
  return (
    <div className="rating">
      <h3>{name}</h3>
      <p>Rating: {rating}</p>
      <p>{getRating(rating)}</p>
    </div>
  );
};

export default Rating;
