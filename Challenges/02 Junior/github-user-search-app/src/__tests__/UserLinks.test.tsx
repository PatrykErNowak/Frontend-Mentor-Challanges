import { screen } from '@testing-library/react';
import { render } from './test-utils';
import { testData } from './testData';
import UserLinks from '../features/User/UserLinks';

describe('UserLinks component', () => {
  test('render correctly', () => {
    render(<UserLinks blog={testData.blog} company={testData.company} location={testData.location} twitter={testData.twitter_username} />);

    const location = screen.getByText(testData.location, { exact: false });
    const web = screen.getByText(testData.blog, { exact: false });
    const twitter = screen.getByText(testData.twitter_username, { exact: false });
    const company = screen.getByText(testData.company);

    expect(location).toBeInTheDocument();
    expect(web).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(company).toBeInTheDocument();
  });

  test('render Not Available if no data', () => {
    render(<UserLinks blog={testData.blog} company={testData.company} location={testData.location} twitter={null} />);

    const twitter = screen.getByRole('paragraph', { name: 'Twitter' });

    expect(twitter).toHaveTextContent('Not available');
  });
});
