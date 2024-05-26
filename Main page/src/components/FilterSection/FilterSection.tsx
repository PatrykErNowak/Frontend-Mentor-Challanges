import styles from './FilterSection.module.css';

function FilterSection({ children, title }: { children: React.ReactElement[]; title: string }) {
  return (
    <section>
      <h4 className={styles.filterCategory}>{title}</h4>
      <ul className={styles.filtersList}>{children}</ul>
    </section>
  );
}

export default FilterSection;
