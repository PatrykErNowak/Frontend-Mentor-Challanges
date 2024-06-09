import { Technology } from './SolutionItem/types';

export default function TechTag({ technology }: { technology: Technology }) {
  const { icon, name, type } = technology;
  if (technology.type !== 'svg')
    return (
      <li className="solution__tech-item">
        <img className="icon" aria-label={name} src={`./tech-icons/other/${icon}.${type}`} />
        <span className="tooltip">{name}</span>
      </li>
    );

  return (
    <li className="solution__tech-item">
      <svg className="icon" aria-label={name} role="img">
        <use xlinkHref={`./tech-icons/sprite.svg#${icon}`}></use>
      </svg>
      <span className="tooltip">{name}</span>
    </li>
  );
}
