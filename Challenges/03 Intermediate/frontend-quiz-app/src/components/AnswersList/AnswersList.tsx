import styles from './AnswersList.module.css';

type CategoryListProps = {
  children: React.ReactNode[] | React.ReactNode;
};

function CategoryList({ children }: CategoryListProps) {
  return <ul className={styles.list}>{children}</ul>;
}

export default CategoryList;
