import hero from '../assets/header-mobile.jpg';
import GithubLogo from './Icons/GitHubLogo';

export default function Header() {
  return (
    <header>
      <h1>Frontend Mentor Solutions</h1>
      <div className="header-content">
        <p>
          Here you can find a showcase of my front-end skills. This collection features my solutions to various Frontend Mentor challenges, each providing a
          real-life workflow experience. From designs, assets, and style requirements, I have honed my skills in building responsive and visually appealing
          websites. Explore my solutions and see the live demos.
        </p>
        <a className="btn btn--primary" href="https://github.com/PatrykErNowak/Frontend-Mentor-Challenges">
          Check out on my GITHUB
          <GithubLogo color="#fff" />
        </a>
      </div>
      <img src={hero} alt="Phone on table displaying 'Developer'" />
    </header>
  );
}
