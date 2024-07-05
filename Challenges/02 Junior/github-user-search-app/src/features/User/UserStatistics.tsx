import styled from 'styled-components';
import { breakpoint } from '../../styles/config';

const StyledUserStatistics = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.5rem;
  background-color: var(--child-container-color);
  border-radius: 1rem;
  @media screen and (min-width: ${breakpoint.tablet}) {
    padding: 1.5rem 3.2rem;
  }
`;

type UserStatisticsProps = {
  repos: number;
  follwing: number;
  followers: number;
};

function UserStatistics({ repos, follwing, followers }: UserStatisticsProps) {
  return (
    <StyledUserStatistics>
      <StatisticItem title="Repos" data={repos} />
      <StatisticItem title="Followers" data={followers} />
      <StatisticItem title="Following" data={follwing} />
    </StyledUserStatistics>
  );
}

export default UserStatistics;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  @media screen and (min-width: ${breakpoint.tablet}) {
    gap: 1rem;
    align-items: flex-start;
  }
`;

const Title = styled.span`
  font-size: 1.1rem;
  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 1.3rem;
  }
`;
const Data = styled.strong`
  font-size: 1.6rem;
  color: var(--heading-color);
  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 2.2rem;
  }
`;

type StatisticItemProps = {
  title: string;
  data: number;
};

function StatisticItem({ title, data }: StatisticItemProps) {
  return (
    <ListItem>
      <Title>{title}</Title>
      <Data>{data}</Data>
    </ListItem>
  );
}
