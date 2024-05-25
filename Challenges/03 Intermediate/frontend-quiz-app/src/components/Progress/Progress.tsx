import styles from './Progress.module.css';
type ProgressProps = {
  value: number;
  maxValue: number;
};

function Progress({ value, maxValue }: ProgressProps) {
  return (
    <div className={styles.progress}>
      <progress value={value} max={maxValue} />
    </div>
  );
}

export default Progress;
