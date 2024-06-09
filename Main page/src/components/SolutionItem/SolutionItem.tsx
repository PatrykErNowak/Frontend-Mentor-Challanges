import ExtLinkIcon from '../../assets/Icons/ExtLinkIcon';
import GithubLogo from '../../assets/Icons/GitHubLogo';
import DifficultyLevelTag from '../DifficultyLevelTag/DifficultyLevelTag';
import TechTag from '../TechTag';
import { Solution } from './types';

export default function SolutionItem({ solution }: { solution: Solution }) {
  const { title, info, type, level, technologies, img, links } = solution;
  return (
    <li className="solution">
      <img src={img.src} alt={img.alt} className="solution__img" />
      <div className="solution__content">
        <h4 className="solution__title">{title}</h4>
        <p className="solution__type">{type}</p>
        <DifficultyLevelTag level={level as keyof typeof DifficultyLevelTag} />
        <div className="solution__box">
          <h5>Buildt with</h5>
          <ul className="solution__tech-list" aria-label="Technologies">
            {technologies.map((tech, i) => (
              <TechTag technology={tech} key={i} />
            ))}
          </ul>
        </div>
        {info && (
          <div className="solution__box">
            <h5>Solution features</h5>
            <p>{info}</p>
          </div>
        )}
        <div className="solution__btns">
          <a href={links.live} className="solution__btn btn btn--secondary">
            Live
            <ExtLinkIcon />
          </a>
          <a href={links.repo} className="solution__btn btn btn--primary">
            Repo
            <GithubLogo />
          </a>
        </div>
      </div>
    </li>
  );
}
