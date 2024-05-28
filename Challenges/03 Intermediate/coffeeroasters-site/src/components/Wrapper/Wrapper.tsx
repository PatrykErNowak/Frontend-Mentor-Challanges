import styles from './Wrapper.module.scss';
import { WrapperProps } from './types';

function Wrapper({ children }: WrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
