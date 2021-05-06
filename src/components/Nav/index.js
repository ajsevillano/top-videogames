import { StyledNav, StyledLogo } from './nav.styles';
import logo from '../../images/logo.svg';

const Nav = () => {
  return (
    <StyledNav>
      <StyledLogo>
        <img src={logo} alt="Logo" />
        <h1>Top Videogames</h1>
      </StyledLogo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

export default Nav;
