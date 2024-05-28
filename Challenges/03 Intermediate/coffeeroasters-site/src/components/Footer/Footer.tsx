import styles from './Footer.module.scss';
import logo from '../../assets/logo - whiteText.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        <img src={logo} alt="" />
      </span>

      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Create your plan</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
