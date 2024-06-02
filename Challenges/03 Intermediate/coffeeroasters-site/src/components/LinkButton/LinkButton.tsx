import { Link } from 'react-router-dom';
import styles from './LinkButton.module.scss';
import { LinkButtonProps } from './types';

function LinkButton({ children, to }: LinkButtonProps) {
  return (
    <Link className={`${styles.btn}`} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
