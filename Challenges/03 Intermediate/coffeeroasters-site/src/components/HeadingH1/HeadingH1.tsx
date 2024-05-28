import styles from './HeadingH1.module.scss';
import { HeadingH1Props } from './types';

function HeadingH1({ children }: HeadingH1Props) {
  return <h1 className={styles.heading}>{children}</h1>;
}

export default HeadingH1;
