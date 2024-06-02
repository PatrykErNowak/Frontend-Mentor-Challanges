import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';
import hamburgerIcon from '../../assets/icon-hamburger.svg';
import closeIcon from '../../assets/icon-close.svg';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Coffee Roasters logo" className={styles.logo} />

      <ul className={`${styles.list} ${isOpen ? 'activeNav' : ''}`}>
        <li className={styles.listItem}>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to={'/about-us'}>About Us</NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to={'/subscribe'}>Create Your Plan</NavLink>
        </li>
      </ul>

      <button type="button" className={styles.menuBtn} onClick={handleNavToggle} aria-hidden={true}>
        {!isOpen && <img src={hamburgerIcon} alt="Open menu" />}
        {isOpen && <img src={closeIcon} alt="Close menu" />}
      </button>
    </nav>
  );
}

export default Navbar;
