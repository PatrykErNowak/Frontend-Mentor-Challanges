import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import styles from './Header.module.css';
import iconSunDark from '../../assets/images/icon-sun-dark.svg';
import iconMoonDark from '../../assets/images/icon-moon-dark.svg';
import IconTitle from '../IconTitle/IconTitle';
import { IconCategoryBGC } from '../../configs/config';
import { useQuizContext } from '../../contexts/QuizContext';

function Header() {
  const { state } = useQuizContext();
  const { category } = state;

  return (
    <header className={styles.header}>
      {category && (
        <IconTitle iconSrc={category.icon} iconBgc={IconCategoryBGC[category.title as keyof typeof IconCategoryBGC]}>
          {category.title}
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
