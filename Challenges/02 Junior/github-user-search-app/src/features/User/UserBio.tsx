import styled, { css } from 'styled-components';

const UserBio = styled.p<{ $isBio: boolean }>`
  ${(props) =>
    props.$isBio
      ? ''
      : css`
          color: var(--text-light-color);
        `}
`;

export default UserBio;
