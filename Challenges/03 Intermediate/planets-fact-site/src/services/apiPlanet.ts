import { Planet } from './types';

async function getPlanet(planet: string) {
  try {
    const res = await fetch('/data/data.json');
    const data: Planet[] = await res.json();
    const planetData = data.find((item) => item.name.toLowerCase() === planet.toLowerCase());
    return planetData;
  } catch (error) {
    throw new Error('Failed getting planet data');
  }
}

async function getAllPlanets() {
  try {
    const res = await fetch('/data/data.json');
    const data: Planet[] = await res.json();
    const planets = data.map((planet) => planet.name.toLowerCase());

    return planets;
  } catch (error) {
    throw new Error('Failed getting planets');
  }
}

export { getPlanet, getAllPlanets };
