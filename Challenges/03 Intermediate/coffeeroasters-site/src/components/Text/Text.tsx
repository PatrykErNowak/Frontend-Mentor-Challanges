import styles from './Text.module.scss';
import { TextProps } from './types';

function Text({ children }: TextProps) {
  return <p className={styles.text}>{children}</p>;
}

export default Text;
