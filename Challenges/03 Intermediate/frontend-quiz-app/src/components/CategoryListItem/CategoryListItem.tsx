import { IconCategoryBGC } from '../../configs/config';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import styles from './CategoryListItem.module.css';

function CategoryListItem({ iconSrc, children }: { iconSrc: string; children: string }) {
  return (
    <>
      <li>
        <button className={styles.item}>
          <CategoryTitle iconSrc={iconSrc} iconBgc={IconCategoryBGC[children as keyof typeof IconCategoryBGC]}>
            {children}
          </CategoryTitle>
        </button>
      </li>
    </>
  );
}

export default CategoryListItem;
