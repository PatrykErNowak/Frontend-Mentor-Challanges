import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

type NavigationProps = {
  planets: string[];
  active?: boolean;
};

function Navigation({ planets, active = false }: NavigationProps) {
  return (
    <nav className={`${styles.nav} ${active ? 'active' : ''}`}>
      <ul className={styles.navList}>
        {planets.map((planet) => (
          <li key={planet} className={`${styles.navListItem} ${planet}`}>
            <NavLink to={`/${planet.toLowerCase()}`}>
              <span className={styles.circle} aria-hidden></span>
              {planet.toLowerCase()}{' '}
              <span className={styles.arrow} aria-hidden>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
                </svg>
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
