import styled from 'styled-components';

const StyledLogo = styled.h1`
  color: var(--heading-color);
  font-size: 2.6rem;
`;

function Logo() {
  return <StyledLogo>devfinder</StyledLogo>;
}

export default Logo;
