import styles from './Main.module.css';

type MainProps = {
  children: React.ReactElement | React.ReactNode[];
};

function Main({ children }: MainProps) {
  return <main className={styles.container}>{children}</main>;
}

export default Main;
