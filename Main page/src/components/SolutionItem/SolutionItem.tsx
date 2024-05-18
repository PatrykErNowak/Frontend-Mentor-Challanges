import ExtLinkIcon from '../Icons/ExtLinkIcon';
import GithubLogo from '../Icons/GitHubLogo';
import { Solution, DifficultyLevel, Technology } from './types';

export default function SolutionItem({ solution }: { solution: Solution }) {
  const { title, type, level, technologies, img, links } = solution;
  return (
    <div className="solution">
      <img src={img.src} alt={img.alt} className="solution__img" />
      <div className="solution__content">
        <h4 className="solution__title">{title}</h4>
        <p className="solution__type">{type}</p>
        <div className={`solution__level solution__level--${level}`} aria-label="Difficulty level">
          <span className="numerical">{DifficultyLevel[level]}</span>
          <span className="lexical">{level}</span>
        </div>
        <ul className="solution__tech-list" aria-label="Technologies">
          {technologies.map((tech) => (
            <TechTag technology={tech} />
          ))}
        </ul>
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
    </div>
  );
}

function TechTag({ technology }: { technology: Technology }) {
  const { icon, name, type } = technology;
  if (technology.type !== 'svg')
    return (
      <li className="solution__tech-item">
        <img className="icon" aria-label={name} src={`./tech-icons/other/${icon}.${type}`} />
      </li>
    );

  return (
    <li className="solution__tech-item">
      <svg className="icon" aria-label={name} role="img">
        <use xlinkHref={`./tech-icons/sprite.svg#${icon}`}></use>
      </svg>
    </li>
  );
}
