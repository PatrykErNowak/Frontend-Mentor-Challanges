import { useState } from 'react';
import { Technology } from '../SolutionItem/types';
import TechTag from '../TechTag';
import styles from './FilterTechListItem.module.css';

function FilterTechListItem({ tech, onAddTechFilter }: { tech: Technology; onAddTechFilter: (param: string) => void }) {
  const [active, setActive] = useState(false);

  function onClickHandle() {
    onAddTechFilter(tech.name);
    setActive((prev) => !prev);
  }

  return (
    <li>
      <button className={`${styles.btn} ${active ? styles.active : ''}`} onClick={onClickHandle}>
        <TechTag technology={tech} />
      </button>
    </li>
  );
}

export default FilterTechListItem;
