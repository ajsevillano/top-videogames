import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameCard = ({ name, release, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{release}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
  }
`;

export default GameCard;
