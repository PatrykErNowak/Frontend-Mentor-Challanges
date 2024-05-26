import { DifficultyLevel } from '../SolutionItem/types';

function DifficultyLevelTag({ level, resetPosition }: { level: string; resetPosition?: boolean }) {
  const styles: React.CSSProperties = {
    position: 'relative',
    margin: '0',
  };

  return (
    <div className={`solution__level solution__level--${level}`} style={resetPosition ? styles : {}} aria-label="Difficulty level">
      <span className="numerical">{DifficultyLevel[level as keyof typeof DifficultyLevel]}</span>
      <span className="lexical">{level}</span>
    </div>
  );
}

export default DifficultyLevelTag;
