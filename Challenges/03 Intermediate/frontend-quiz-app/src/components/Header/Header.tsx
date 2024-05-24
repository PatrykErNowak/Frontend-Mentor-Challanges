import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import styles from './Header.module.css';
import iconSunDark from '../../assets/images/icon-sun-dark.svg';
import iconMoonDark from '../../assets/images/icon-moon-dark.svg';
import CategoryTitle from '../CategoryTitle/CategoryTitle';
import { IconCategoryBGC } from '../../configs/config';

const tempData = { categoryTitle: 'HTML', iconSrc: 'images/icon-html.svg' };

function Header() {
  return (
    <header className={styles.header}>
      <CategoryTitle iconSrc={tempData.iconSrc} iconBgc={IconCategoryBGC[tempData.categoryTitle]}>
        {tempData.categoryTitle}
      </CategoryTitle>
      <div className={styles.themeSwitcher}>
        <img className={styles.icon} src={iconSunDark} alt="Light theme" />
        <ToggleSwitch ariaLabel="Switch theme" onSetToggle={(data) => console.log(data)} />
        <img className={styles.icon} src={iconMoonDark} alt="Dark theme" />
      </div>
    </header>
  );
}

export default Header;
