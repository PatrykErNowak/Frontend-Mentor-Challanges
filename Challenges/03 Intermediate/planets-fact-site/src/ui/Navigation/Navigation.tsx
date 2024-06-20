import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { SyntheticEvent } from 'react';

type NavigationProps = {
  planets: string[];
  active?: boolean;
};

function Navigation({ planets, active = false }: NavigationProps) {
  return (
    <nav className={`${styles.nav} ${active ? 'active' : ''}`}>
      <ul className={styles.navList}>
        {planets.map((planet) => (
          <NavListItem planet={planet} key={planet} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

function NavListItem({ planet }: { planet: string }) {
  function handleLinkClick(e: SyntheticEvent<HTMLAnchorElement>) {
    const pathname = document.location.pathname;
    if (pathname.includes(planet)) e.preventDefault();
  }

  return (
    <li className={`${styles.navListItem} ${planet}`}>
      <NavLink to={`/${planet.toLowerCase()}`} onClick={handleLinkClick}>
        <span className={styles.circle} aria-hidden></span>
        {planet.toLowerCase()}{' '}
        <span className={styles.arrow} aria-hidden>
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
            <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
          </svg>
        </span>
      </NavLink>
    </li>
  );
}
