import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../assets/logo - whiteText.svg';
import facebook from '../../assets/socials/icon-facebook.svg';
import twitter from '../../assets/socials/icon-twitter.svg';
import instagram from '../../assets/socials/icon-instagram.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <ul className={styles.sitemap} aria-label="sitemap">
        <li>
          <Link className={styles.link} to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/about-us'}>
            About us
          </Link>
        </li>
        <li>
          <Link className={styles.link} to={'/subscribe'}>
            Create your plan
          </Link>
        </li>
      </ul>

      <ul className={styles.socials}>
        <li>
          <Link to={'/#'} className={styles.socialLink}>
            <img src={facebook} alt="" />
          </Link>
        </li>
        <li>
          <Link to={'/#'} className={styles.socialLink}>
            <img src={twitter} alt="" />
          </Link>
        </li>
        <li>
          <Link to={'/#'} className={styles.socialLink}>
            <img src={instagram} alt="" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
