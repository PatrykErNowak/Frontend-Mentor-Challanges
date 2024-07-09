import { screen } from '@testing-library/react';
import { render, testQueryClient } from './test-utils';
import UserInfoBox from '../features/User/UserInfoBox';
import { testData } from './testData';

describe('SearchForm component', () => {
  testQueryClient.setQueryDefaults(['user'], { queryFn: () => {} });
  testQueryClient.setQueryData(['user'], testData);

  test('render correctly', async () => {
    render(<UserInfoBox />);

    const name = await screen.findByText(testData.name, { exact: false });
    const login = await screen.findByText(`@${testData.login}`, { exact: false });
    const bio = await screen.findByText(testData.bio, { exact: false });

    const repos = (await screen.findByText(`Repos`, { exact: false })).parentElement;
    const followers = (await screen.findByText(`Followers`, { exact: false })).parentElement;
    const following = (await screen.findByText(`Following`, { exact: false })).parentElement;

    const location = await screen.findByText(testData.location, { exact: false });
    const web = await screen.findByText(testData.blog, { exact: false });
    const twitter = await screen.findByText(testData.twitter_username, { exact: false });
    const company = await screen.findByText(testData.company);

    expect(name).toBeInTheDocument();
    expect(login).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(repos).toHaveTextContent(String(testData.public_repos));
    expect(followers).toHaveTextContent(String(testData.followers));
    expect(following).toHaveTextContent(String(testData.following));
    expect(location).toBeInTheDocument();
    expect(web).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(company).toBeInTheDocument();
  });
});
