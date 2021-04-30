import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GameCard = ({ name, release, image }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{release}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default GameCard;
