import { useState } from 'react';
import DifficultyLevelTag from '../DifficultyLevelTag/DifficultyLevelTag';
import styles from './FilterDifficultyListItem.module.css';

function FilterDifficultyListItem({ level, onAddTechFilter }: { level: string; onAddTechFilter: (param: string) => void }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    onAddTechFilter(level);
    setActive((prev) => !prev);
  }

  return (
    <li>
      <button className={`${styles.btn} ${active ? styles.active : ''}`} onClick={handleClick}>
        <DifficultyLevelTag resetPosition={true} level={level as keyof typeof DifficultyLevelTag} key={level} />
      </button>
    </li>
  );
}

export default FilterDifficultyListItem;
