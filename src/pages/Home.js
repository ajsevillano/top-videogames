import { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

//Styles & animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Components
import GameDetailsModal from '../components/GameDetailsModal';
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
    <StyledGameListsWrapper>
      {pathID && <GameDetailsModal />}
      {searched.length ? <GameSection state={searched} title="Searched" /> : ''}
      <GameSection state={upcoming} title="Upcoming" />
      <GameSection state={popular} title="Popular" />
      <GameSection state={newGames} title="New" />
    </StyledGameListsWrapper>
  );
};

const StyledGameListsWrapper = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3rem 0rem;
  }
`;

export default Home;
