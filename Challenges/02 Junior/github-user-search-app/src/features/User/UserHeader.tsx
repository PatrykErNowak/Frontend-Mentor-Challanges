import styled from 'styled-components';
import { breakpoint } from '../../styles/config';
import { formatToLocalDate } from '../../utils/helpers';

const StyledUserHeader = styled.div`
  display: grid;
  align-content: center;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-columns: 1fr auto;
  }
`;

const UserHeading = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
  text-transform: capitalize;
  color: var(--heading-color);

  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 2.6rem;
  }
`;

const UserLink = styled.a`
  color: var(--primary-color);
  width: max-content;

  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 1.6rem;
  }
`;

const UserJoined = styled.p`
  color: var(--strong-text-color);

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 2/3;
    grid-row: 1/-1;
    align-self: center;
  }
`;

type UserHeaderProps = { username: string; name: string | null; pageHref: string; joinDate: string };

function UserHeader({ username, name, pageHref, joinDate }: UserHeaderProps) {
  return (
    <StyledUserHeader>
      <UserHeading>{name || username}</UserHeading>
      <UserLink href={pageHref}>@{username}</UserLink>
      <UserJoined>Joined {formatToLocalDate(joinDate)}</UserJoined>
    </StyledUserHeader>
  );
}

export default UserHeader;
