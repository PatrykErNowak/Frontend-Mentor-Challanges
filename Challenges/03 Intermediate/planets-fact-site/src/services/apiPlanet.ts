import { Planet } from '../pages/Planet/types';

async function getPlanet(planet: string) {
  try {
    const res = await fetch('/data/data.json');
    const data: Planet[] = await res.json();
    const planetData = data.find((item) => item.name.toLowerCase() === planet.toLowerCase());
    return planetData;
  } catch (error) {
    throw new Error('Failed getting planet data from server');
  }
}

async function getAllPlanets() {
  try {
    const res = await fetch('/data/data.json');
    const data: Planet[] = await res.json();
    const planets = data.map((planet) => planet.name.toLowerCase());

    return planets;
  } catch (error) {
    throw new Error('Failed getting planets data from server');
  }
}

export { getPlanet, getAllPlanets };
