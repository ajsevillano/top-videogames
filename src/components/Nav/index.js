import { StyledNav, StyledLogo } from './nav.styles';
import * as gamepad from '../../images/gamepad.json';
import useLottie from '../../utils/useLottie';
import { useState, useRef } from 'react';
import useNavigation from './nav.utils';

const Nav = () => {
  //Lottie animation
  const lottieOptions = { height: 100, width: 100, animationName: gamepad };
  const [animatedLogo] = useLottie(lottieOptions);

  const buttonRef = useRef();

  const [textInput, setTextInput] = useState('');
  const [inputHandler, submitSearch] = useNavigation(
    textInput,
    setTextInput,
    buttonRef
  );

  return (
    <StyledNav>
      <StyledLogo>
        {animatedLogo}
        <h1>Top Videogames</h1>
      </StyledLogo>
      <form onSubmit={submitSearch} className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit">Search</button>
        <h4 ref={buttonRef}>The search cannot be empty</h4>
      </form>
    </StyledNav>
  );
};

export default Nav;
