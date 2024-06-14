import styles from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Header({ planets }: { planets: string[] }) {
  const [showNav, setShowNav] = useState(false);
  const { planet } = useParams();

  function handleToggleNavigation() {
    setShowNav((prev) => !prev);
  }

  useEffect(() => setShowNav(false), [planet]);

  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>the planets</h1>

      <Navigation planets={planets} active={showNav} />

      <button
        className={`${styles.hamburger} ${showNav ? 'active' : ''}`}
        onClick={handleToggleNavigation}
        aria-label="Toggle navigation"
        aria-expanded={showNav}
        tabIndex={1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </button>
    </header>
  );
}

export default Header;
