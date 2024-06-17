import { getAllPlanets } from '../../services/apiPlanet';
import Header from '../Header/Header';
import styles from './AppLayout.module.css';
import { Outlet, useLoaderData } from 'react-router-dom';

function AppLayout() {
  const planets = useLoaderData() as string[];

  return (
    <div className={styles.app}>
      <Header planets={planets} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export async function loader() {
  const planets = await getAllPlanets();
  return planets;
}

export default AppLayout;
