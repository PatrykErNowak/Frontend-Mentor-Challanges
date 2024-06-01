import styles from './Card.module.scss';
import { CardProps } from './types';

function Card({ groupName, title, children, onChangePlan, questionLevel }: CardProps) {
  function handleChange() {
    onChangePlan(groupName, title, questionLevel);
  }

  return (
    <label htmlFor={`${groupName}-${title}`} className={styles.card}>
      <input onChange={handleChange} type="radio" name={groupName} id={`${groupName}-${title}`} value={title} className={styles.radio} />
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{children}</p>
    </label>
  );
}

export default Card;
