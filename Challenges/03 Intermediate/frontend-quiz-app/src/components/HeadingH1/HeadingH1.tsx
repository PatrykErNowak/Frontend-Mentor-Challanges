import styles from './HeadingH1.module.css';
import { HeadingH1Props } from './types';

function HeadingH1({ preChildren, children }: HeadingH1Props) {
  return (
    <h1 className={styles.title}>
      {preChildren}
      <span>{children}</span>
    </h1>
  );
}

export default HeadingH1;
