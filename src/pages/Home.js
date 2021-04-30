import { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

import styled from 'styled-components';
import { motion } from 'framer-motion';

//Components
import GameCard from '../components/game-card/Index';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Extract data from Store
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return <div>Home</div>;
};

export default Home;
