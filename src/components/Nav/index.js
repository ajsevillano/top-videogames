import { StyledNav, StyledLogo } from './nav.styles';
import logo from '../../images/logo.svg';
import { fetchSearch } from '../../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

const Nav = () => {
  const dispatch = useDispatch();
  const buttonRef = useRef();
  const [textInput, setTextInput] = useState('');

  const submitOk = () => {
    dispatch(fetchSearch(textInput));
    return (buttonRef.current.style.display = 'none');
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    !textInput ? (buttonRef.current.style.display = 'block') : submitOk();
    setTextInput('');
  };
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
