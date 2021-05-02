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
      <h2>Popular games</h2>
      <Games>
        {popular.map((popularGame) => (
          <GameCard
            name={popularGame.name}
            release={popularGame.released}
            id={popularGame.id}
            key={popularGame.id}
            image={popularGame.background_image}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
