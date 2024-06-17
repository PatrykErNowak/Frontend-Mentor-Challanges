import styles from './DataItem.module.css';

type DataItemProps = {
  title: string;
  children: string;
};

function DataItem({ title, children }: DataItemProps) {
  return (
    <div className={styles.dataItem}>
      <p className={styles.dataText}>
        <span>{title}</span>
        <strong>{children}</strong>
      </p>
    </div>
  );
}

export default DataItem;
