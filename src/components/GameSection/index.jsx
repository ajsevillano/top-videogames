//Styles & animations
import styled from 'styled-components';

//Components
import GameCard from '../GameCard';

const GameSection = ({ state, title }) => {
  return (
    <>
      <h2>
        {title === 'Searched' ? `${title}:${state.length}` : `${title} games`}
      </h2>
      <StyledGames>
        {state.map((game) => (
          <GameCard
            name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
            screenshots={game.short_screenshots}
          />
        ))}
      </StyledGames>
    </>
  );
};

const StyledGames = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default GameSection;
