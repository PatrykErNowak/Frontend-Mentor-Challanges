import styles from './DataBox.module.css';

function DataBox({ children }: { children: React.ReactElement[] }) {
  return <div className={styles.dataBox}>{children}</div>;
}

export default DataBox;
