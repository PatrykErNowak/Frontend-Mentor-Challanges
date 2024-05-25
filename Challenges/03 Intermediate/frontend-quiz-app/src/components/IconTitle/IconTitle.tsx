import styles from './IconTitle.module.css';
import { IconTitleProps } from './types';

function IconTitle({ children, iconSrc, text, iconBgc, state = '' }: IconTitleProps) {
  const styleSet = {
    backgroundColor: iconBgc,
  };

  const iconContent = iconSrc ? <img src={iconSrc} alt={`${children} icon`} /> : <span>{text}</span>;

  return (
    <div className={`${styles.category} ${styles[state]}`}>
      <div className={styles.iconBox} style={iconBgc ? styleSet : {}}>
        {iconContent}
      </div>
      <p className={styles.title}>{children}</p>
    </div>
  );
}

export default IconTitle;
