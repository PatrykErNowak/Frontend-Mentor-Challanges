import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from './Progress.module.css';
type ProgressProps = {
  value: number;
  maxValue: number;
};

function Progress({ value, maxValue }: ProgressProps) {
  const { theme } = useThemeContext();
  return (
    <div className={`${styles.progress} ${styles[theme]}`}>
      <progress value={value} max={maxValue} />
    </div>
  );
}

export default Progress;
