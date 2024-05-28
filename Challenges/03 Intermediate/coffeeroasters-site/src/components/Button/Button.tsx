import styles from './Button.module.scss';
import { ButtonProps } from './types';

function Button({ children }: ButtonProps) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
