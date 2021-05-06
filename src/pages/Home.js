import { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

//Styles & animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Components
import GameCard from '../components/game-card/index';
import GameDetails from '../components/game-details/index';

//Router
import { useLocation } from 'react-router-dom';

const Home = () => {
  //Location
  const location = useLocation();
  const pathID = location.pathname.split('/')[2];
  //Fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Extract data from Store
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return (
    <GameList>
      {pathID && <GameDetails />}
      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <GameCard
            name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
            screenshots={game.short_screenshots}
          />
        ))}
      </Games>
      <h2>Popular games</h2>
      <Games>
        {popular.map((game) => (
          <GameCard
            name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
            screenshots={game.short_screenshots}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <GameCard
            name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
            screenshots={game.short_screenshots}
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
