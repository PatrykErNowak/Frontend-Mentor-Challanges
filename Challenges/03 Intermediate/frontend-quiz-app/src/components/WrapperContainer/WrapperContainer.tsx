import styles from './WrapperContainer.module.css';

function WrapperContainer({ children }: { children: Array<React.ReactElement> }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default WrapperContainer;
