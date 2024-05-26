import styles from './Message.module.css';
import image from '../../assets/Icons/search.svg';

function Message() {
  return (
    <div className={styles.messageBox}>
      <img src={image} alt="" />
      <p>Sorry, there are no solutions that meet the given filters.</p>
    </div>
  );
}

export default Message;
