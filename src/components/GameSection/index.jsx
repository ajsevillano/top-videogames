import { StyledGames } from './GameSection.styles';

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

export default GameSection;
