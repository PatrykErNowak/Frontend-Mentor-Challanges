import styles from './Button.module.css';

type ButtonProps = {
  children: string;
  onClick: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
