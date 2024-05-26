import { Technology } from './SolutionItem/types';

export default function TechTag({ technology }: { technology: Technology }) {
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
