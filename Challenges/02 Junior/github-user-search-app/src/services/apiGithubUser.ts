import { Octokit, RequestError } from 'octokit';

const GithubToken = import.meta.env.VITE_GITHUB_TOKEN;
const noResultsErrorMessage = 'User not found';

const octokit = new Octokit({
  auth: GithubToken,
});

async function getUser(userQuery: string) {
  try {
    const data = await octokit.request('GET /users/{username}', {
      username: userQuery,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return data;
  } catch (error: unknown) {
    if (error instanceof RequestError) {
      if (error.status === 404) throw new Error(noResultsErrorMessage);

      console.error(error);
      throw error;
    }
    throw error;
  }
}

export { getUser, noResultsErrorMessage };
