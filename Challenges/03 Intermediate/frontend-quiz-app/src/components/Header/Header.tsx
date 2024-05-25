import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import styles from './Header.module.css';
import iconSunDark from '../../assets/images/icon-sun-dark.svg';
import iconSunLight from '../../assets/images/icon-sun-light.svg';
import iconMoonDark from '../../assets/images/icon-moon-dark.svg';
import iconMoonLight from '../../assets/images/icon-moon-light.svg';
import IconTitle from '../IconTitle/IconTitle';
import { IconCategoryBGC } from '../../configs/config';
import { useQuizContext } from '../../contexts/QuizContext/QuizContext';
import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext';

function Header() {
  const { theme, setTheme } = useThemeContext();
  const { state } = useQuizContext();
  const { category } = state;

  function handleTheme(isToogle: boolean) {
    const themeApp = isToogle ? 'light' : 'dark';
    setTheme(themeApp);
  }

  return (
    <header className={styles.header}>
      {category && (
        <IconTitle iconSrc={category.icon} iconBgc={IconCategoryBGC[category.title as keyof typeof IconCategoryBGC]}>
          {category.title}
        </IconTitle>
      )}
      <div className={styles.themeSwitcher}>
        <img className={styles.icon} src={theme === 'light' ? iconSunDark : iconSunLight} alt="Light theme" />
        <ToggleSwitch ariaLabel="Switch theme" onSetToggle={handleTheme} />
        <img className={styles.icon} src={theme === 'light' ? iconMoonDark : iconMoonLight} alt="Dark theme" />
      </div>
    </header>
  );
}

export default Header;
