import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import styles from './SmallText.module.css';

function SmallText({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();

  return <p className={`${styles.text} ${styles[theme]}`}>{children}</p>;
}

export default SmallText;
