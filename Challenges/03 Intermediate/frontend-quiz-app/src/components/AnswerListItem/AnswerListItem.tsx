import IconTitle from '../IconTitle/IconTitle';
import styles from './AnswerListItem.module.css';
import correctIcon from '../../assets/images/icon-correct.svg';
import incorrectIcon from '../../assets/images/icon-incorrect.svg';
import { CategoryListItemProps } from './types';
import { State as IconTitleState } from '../IconTitle/types';
import { useThemeContext } from '../../contexts/ThemeContext/ThemeContext';

function CategoryListItem({ iconSrc, iconText, iconBgc, children, onAnswer, btnState = 'idle', disabled = false }: CategoryListItemProps) {
  const { theme } = useThemeContext();

  function handleClick() {
    onAnswer(children);
  }

  let stateClass = undefined;
  let iconTitleState: IconTitleState = '';
  if (btnState === 'active') {
    iconTitleState = 'active';
    stateClass = styles.active;
  }
  if (btnState === 'correctAnswer') {
    iconTitleState = 'success';
    stateClass = styles.correct;
  }
  if (btnState === 'wrongAnswer') {
    iconTitleState = 'failure';
    stateClass = styles.wrong;
  }

  return (
    <>
      <li>
        <button className={`${styles.item} ${stateClass} ${styles[theme]}`} onClick={handleClick} disabled={disabled}>
          <IconTitle state={iconTitleState} iconSrc={iconSrc} text={iconText} iconBgc={iconBgc}>
            {children}
          </IconTitle>
          {(btnState === 'correctAnswer' || btnState === 'correctOption') && <img src={correctIcon} alt="" />}
          {btnState === 'wrongAnswer' && <img src={incorrectIcon} alt="" />}
        </button>
      </li>
    </>
  );
}

export default CategoryListItem;
