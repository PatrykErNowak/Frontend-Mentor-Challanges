import DifficultyLevelTag from '../DifficultyLevelTag/DifficultyLevelTag';
import FilterDifficultyListItem from '../FilterDifficultyListItem/FilterDifficultyListItem';
import FilterSection from '../FilterSection/FilterSection';
import FilterTechBox from '../FilterTechBox/FilterTechBox';
import { Solution, Technology } from '../SolutionItem/types';
import styles from './FilterBox.module.css';

export type Techs = {
  languages: Technology[];
  frameworks: Technology[];
  styling: Technology[];
  build: Technology[];
};

function FilterBox({
  solutions,
  techs,
  onAddTechFilter,
  onAddDiffFilters,
  onSortChange,
}: {
  solutions: Solution[];
  techs: Techs;
  onAddTechFilter: (p: string) => void;
  onAddDiffFilters: (p: string) => void;
  onSortChange: (p: string) => void;
}) {
  const diffLevels = [...new Set(solutions.map((sol) => sol.level))];

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Filter by:</h3>
      <div className={styles.filterBox}>
        <FilterSection title="Difficulty">
          {diffLevels.map((lev) => (
            <FilterDifficultyListItem key={lev} level={lev as keyof typeof DifficultyLevelTag} onAddTechFilter={onAddDiffFilters} />
          ))}
        </FilterSection>
        <FilterSection title="Technologies">
          {techs.languages && <FilterTechBox onAddTechFilter={onAddTechFilter} techs={techs.languages} />}
          {techs.frameworks && <FilterTechBox onAddTechFilter={onAddTechFilter} techs={techs.frameworks} />}
          {techs.styling && <FilterTechBox onAddTechFilter={onAddTechFilter} techs={techs.styling} />}
          {techs.build && <FilterTechBox onAddTechFilter={onAddTechFilter} techs={techs.build} />}
        </FilterSection>
      </div>
      <select
        className={styles.sort}
        name="sort"
        id="sort"
        onChange={(e) => {
          onSortChange(e.currentTarget.value);
        }}>
        <option value="newest">Sort by date (newest first)</option>
        <option value="oldest">Sort by date (oldest first)</option>
      </select>
    </div>
  );
}

export default FilterBox;
