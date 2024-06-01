import styles from './Button.module.scss';
import { ButtonProps } from './types';

function Button({ children, disabled = false, onClick }: ButtonProps) {
  return (
    <button className={`${styles.btn}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
