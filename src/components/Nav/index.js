import { StyledNav, StyledLogo } from './nav.styles';
import logo from '../../images/logo.svg';
import { useState, useRef } from 'react';
import useNavigation from './nav.utils';

const Nav = () => {
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
        <img src={logo} alt="Logo" />
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
