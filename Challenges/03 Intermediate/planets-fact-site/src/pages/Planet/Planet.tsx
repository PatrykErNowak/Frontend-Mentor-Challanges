import { useLoaderData } from 'react-router-dom';
import { getPlanet } from '../../services/apiPlanet';

function Planet() {
  const planet = useLoaderData();
  // console.log(planet);
  return <div></div>;
}

export default Planet;

export async function loader({ params }) {
  const planet = await getPlanet(params.planet);
  return planet;
}
