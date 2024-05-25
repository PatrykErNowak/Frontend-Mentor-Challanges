import styles from './Button.module.css';
import { ButtonProps } from './types';

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
