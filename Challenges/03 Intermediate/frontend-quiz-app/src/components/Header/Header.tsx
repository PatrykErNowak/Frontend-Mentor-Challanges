import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import styles from './Header.module.css';
import iconSunDark from '../../assets/images/icon-sun-dark.svg';
import iconMoonDark from '../../assets/images/icon-moon-dark.svg';
import IconTitle from '../IconTitle/IconTitle';
import { IconCategoryBGC } from '../../configs/config';
import { useQuizContext } from '../../contexts/QuizContext';

const tempData = { categoryTitle: 'HTML', iconSrc: 'images/icon-html.svg' };

function Header() {
  const { state } = useQuizContext();
  const { category } = state;

  return (
    <header className={styles.header}>
      {category && (
        <IconTitle iconSrc={tempData.iconSrc} iconBgc={IconCategoryBGC[category.icon as keyof typeof IconCategoryBGC]}>
          {tempData.categoryTitle}
        </IconTitle>
      )}
      <div className={styles.themeSwitcher}>
        <img className={styles.icon} src={iconSunDark} alt="Light theme" />
        <ToggleSwitch ariaLabel="Switch theme" onSetToggle={(data) => console.log(data)} />
        <img className={styles.icon} src={iconMoonDark} alt="Dark theme" />
      </div>
    </header>
  );
}

export default Header;
