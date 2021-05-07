import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    &:focus {
      outline: 1px solid #ff7676;
      outline-offset: -1px;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

export const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
  img {
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 1rem;
  }
`;
