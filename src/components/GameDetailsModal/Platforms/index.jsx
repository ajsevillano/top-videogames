import { StyledInfo, StyledPlatforms } from './Platforms.styles';
import { getPlatformIcon } from './Platforms.utils';

const Platforms = ({ state }) => {
  return (
    <StyledInfo>
      <h3>Platform</h3>
      <StyledPlatforms>
        {state?.map((data) =>
          getPlatformIcon(data.platform.name, data.platform.id)
        )}
      </StyledPlatforms>
    </StyledInfo>
  );
};

export default Platforms;
