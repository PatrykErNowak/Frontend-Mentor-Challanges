import styles from './SmallText.module.css';

function SmallText({ children }: { children: React.ReactNode }) {
  return <p className={styles.text}>{children}</p>;
}

export default SmallText;
