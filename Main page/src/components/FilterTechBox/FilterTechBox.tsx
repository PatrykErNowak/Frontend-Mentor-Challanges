import FilterTechListItem from '../FilterTechListItem/FilterTechListItem';
import { Technology } from '../SolutionItem/types';
import styles from './FilterTechBox.module.css';

function FilterTechBox({ techs, onAddTechFilter }: { techs: Technology[]; onAddTechFilter: (p: string) => void }) {
  return (
    <div className={styles.box}>
      {techs.map((tech) => (
        <FilterTechListItem onAddTechFilter={onAddTechFilter} tech={tech} key={tech.name} />
      ))}
    </div>
  );
}

export default FilterTechBox;
