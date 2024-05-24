import CategoryListItem from '../CategoryListItem/CategoryListItem';
import styles from './CategoryList.module.css';

function CategoryList() {
  return (
    <ul className={styles.list}>
      <CategoryListItem iconSrc={'images/icon-html.svg'}>HTML</CategoryListItem>
      <CategoryListItem iconSrc={'images/icon-html.svg'}>HTML</CategoryListItem>
      <CategoryListItem iconSrc={'images/icon-html.svg'}>HTML</CategoryListItem>
      <CategoryListItem iconSrc={'images/icon-html.svg'}>HTML</CategoryListItem>
    </ul>
  );
}

export default CategoryList;
