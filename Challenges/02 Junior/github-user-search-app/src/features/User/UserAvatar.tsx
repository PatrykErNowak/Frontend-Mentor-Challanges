import styled from 'styled-components';
import { breakpoint } from '../../styles/config';

type UserAvatarProps = {
  src: string;
  alt: string;
  className?: string;
};

const StyledUserAvatar = styled.div`
  overflow: hidden;
  width: 7rem;
  aspect-ratio: 1/1;
  border-radius: 50%;

  @media screen and (min-width: ${breakpoint.tablet}) {
    width: 11.7rem;
  }
`;

function UserAvatar({ src, alt, className }: UserAvatarProps) {
  return (
    <StyledUserAvatar className={className}>
      <img src={src} alt={alt} />
    </StyledUserAvatar>
  );
}

export default UserAvatar;
