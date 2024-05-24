import styles from './Main.module.css';

function Main({ children }: { children: Array<React.ReactNode> }) {
  return <main className={styles.container}>{children}</main>;
}

export default Main;
