import styled from 'styled-components';
import { breakpoint } from '../styles/config';

const Button = styled.button`
  padding: 1.2rem 1.4rem;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: var(--white-color);
  text-transform: capitalize;
  border: none;
  border-radius: 1rem;
  background-color: var(--primary-color);

  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 1.6rem;
  }
  @media screen and (min-width: ${breakpoint.laptop}) {
    &:hover,
    &:focus {
      background-color: var(--primary-hover-color);
      outline: none;
    }
  }
`;

export default Button;
