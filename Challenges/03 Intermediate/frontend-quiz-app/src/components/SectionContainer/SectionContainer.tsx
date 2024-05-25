import styles from './SectionContainer.module.css';

type SectionContainerProps = {
  children: React.ReactNode[];
};

function SectionContainer({ children }: SectionContainerProps) {
  return <section className={styles.section}>{children}</section>;
}

export default SectionContainer;
