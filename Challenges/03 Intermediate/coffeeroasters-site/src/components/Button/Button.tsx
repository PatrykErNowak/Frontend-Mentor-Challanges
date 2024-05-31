import styles from './Button.module.scss';
import { ButtonProps } from './types';

function Button({ children, disabled = false }: ButtonProps) {
  return (
    <button className={`${styles.btn}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
