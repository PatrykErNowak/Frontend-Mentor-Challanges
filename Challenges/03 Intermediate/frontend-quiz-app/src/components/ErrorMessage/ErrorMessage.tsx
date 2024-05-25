import styles from './ErrorMessage.module.css';
import errorIcon from '../../assets/images/icon-error.svg';
type ErrorMessagerProps = {
  children: React.ReactNode;
};

function ErrorMessage({ children }: ErrorMessagerProps) {
  return (
    <div className={styles.error}>
      <img src={errorIcon} alt="" />
      <p>{children}</p>
    </div>
  );
}

export default ErrorMessage;
