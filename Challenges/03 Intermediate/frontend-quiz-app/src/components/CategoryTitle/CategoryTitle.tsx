import styles from './CategoryTitle.module.css';

function CategoryTitle({ children, iconSrc, iconBgc = `#f4f6fa` }: { children: React.ReactNode; iconSrc: string; iconBgc: string }) {
  const styleSet = {
    backgroundColor: iconBgc,
  };

  return (
    <div className={styles.category}>
      <div className={styles.iconBox} style={styleSet}>
        <img src={iconSrc} alt={`${children} icon`} />
      </div>
      <p className={styles.title}>{children}</p>
    </div>
  );
}

export default CategoryTitle;
