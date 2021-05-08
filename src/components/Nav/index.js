import { StyledNav, StyledLogo } from './nav.styles';
import logo from '../../images/logo.svg';
import { fetchSearch } from '../../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };
  return (
    <StyledNav>
      <StyledLogo>
        <img src={logo} alt="Logo" />
        <h1>Top Videogames</h1>
      </StyledLogo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

export default Nav;
