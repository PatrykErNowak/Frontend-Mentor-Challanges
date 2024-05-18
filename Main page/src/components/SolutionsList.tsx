import SolutionItem from './SolutionItem/SolutionItem';
import { Solution } from './SolutionItem/types';

export default function SolutionsList({ solutions }: { solutions: Solution[] }) {
  return (
    <ul className="list-of-solutions js-solutions-list">
      {solutions.map((item) => (
        <SolutionItem solution={item} key={item.id} />
      ))}
    </ul>
  );
}
