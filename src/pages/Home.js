import { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

//Styles & animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Components
import GameDetails from '../components/game-details';
import GameSection from '../components/GameSection';

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
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList>
      {pathID && <GameDetails />}
      {/* Search section */}
      {searched.length ? <GameSection state={searched} title="Searched" /> : ''}
      {/* Upcoming games */}
      <GameSection state={upcoming} title="Upcoming" />
      {/* Popular games */}
      <GameSection state={popular} title="Popular" />
      {/* New games */}
      <GameSection state={newGames} title="New" />
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3rem 0rem;
  }
`;

export default Home;
