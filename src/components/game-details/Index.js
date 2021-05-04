import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';

const GameDetails = () => {
  //Extract data from Store
  const { game, screenshot } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>{game.rating}</p>
          </div>
          <div className="info">
            <h3>Platform</h3>
            <div className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt="Image" />
        </div>
        <div className="gallery">
          {screenshot.results.map((screenshot) => (
            <img src={screenshot.image} key={screenshot.id} alt="game" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
