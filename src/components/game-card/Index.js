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
  img {
    width: 100%;
  }
`;

export default GameCard;
