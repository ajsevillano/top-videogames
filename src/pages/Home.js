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

  return (
    <GameList>
      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((upcomingGame) => (
          <GameCard
            name={upcomingGame.name}
            release={upcomingGame.released}
            id={upcomingGame.id}
            key={upcomingGame.id}
            image={upcomingGame.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;

export default Home;
