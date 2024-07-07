import styled from 'styled-components';
import { useDarkMode } from '../../context/DarkModeContext';
import { useQuery } from '@tanstack/react-query';
import { User } from '../../services/apiGithubUser';
import { breakpoint } from '../../styles/config';

import UserHeader from './UserHeader';
import Spinner from '../../components/Spinner';
import UserAvatar from './UserAvatar';
import UserStatistics from './UserStatistics';
import UserBio from './UserBio';
import Container from '../../components/Container';
import UserLinks from './UserLinks';

const StyledUserInfoBox = styled(Container)`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  padding: 3.2rem 2.4rem 4.8rem;
  font-size: 1.3rem;

  @media screen and (min-width: ${breakpoint.tablet}) {
    column-gap: 4.1rem;
    font-size: 1.5rem;
    padding: 4rem;
  }
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-template-rows: auto 1fr;
    padding: 4.8rem;
  }
`;

const AvatarExt = styled(UserAvatar)`
  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-row: 1/-1;
  }
`;

const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1/-1;
  margin-top: 3rem;

  @media screen and (min-width: ${breakpoint.laptop}) {
    grid-column: 2/3;
    gap: 3.2rem;
    margin-top: 2rem;
  }
`;

function UserInfoBox() {
  const { isDarkMode } = useDarkMode();
  const { isFetching, data = {} } = useQuery({
    queryKey: ['user'],
    staleTime: Infinity,
  });

  if (isFetching) return <Spinner />;

  const { login, avatar_url, html_url, created_at, bio, public_repos, followers, following, location, blog, twitter_username, company, name } =
    data as User['data'];

  return (
    <StyledUserInfoBox $mode={isDarkMode ? 'dark' : 'light'}>
      <AvatarExt src={avatar_url} alt={login ? `${login} avatar` : ''} />
      <UserHeader username={login} name={name} pageHref={html_url} joinDate={created_at} />
      <UserContent>
        <UserBio $isBio={Boolean(bio)}>{bio || 'This profile has no bio'}</UserBio>
        <UserStatistics repos={public_repos} followers={followers} follwing={following} />
        <UserLinks location={location} blog={blog} twitter={twitter_username} company={company} />
      </UserContent>
    </StyledUserInfoBox>
  );
}

export default UserInfoBox;
