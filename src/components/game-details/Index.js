import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';

const GameDetails = () => {
  //Extract data from Store
  const { game, screenShot } = useSelector((state) => state.detail);

  return <div></div>;
};

export default GameDetails;
