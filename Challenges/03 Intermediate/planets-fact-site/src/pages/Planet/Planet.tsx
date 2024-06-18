import styles from './Planet.module.css';
import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';
import { getPlanet } from '../../services/apiPlanet';
import { Planet } from './types';
import Tabs from './Tabs/Tabs';
import { useEffect, useState } from 'react';
import PlanetImage from './PlanetImage/PlanetImage';
import HeaderInfoBox from './HeaderInfoBox/HeaderInfoBox';
import DataBox from './DataBox/DataBox';
import DataItem from './DataItem/DataItem';

function PlanetView() {
  const { name, images, overview, structure, geology, rotation, radius, revolution, temperature } = useLoaderData() as Planet;
  const [tab, setTab] = useState('overview');
  const tabContent = tab === 'overview' ? overview : tab === 'structure' ? structure : geology;

  function handleTabChange(tab: string) {
    setTab(tab);
  }

  useEffect(() => {
    const defaultTitle = document.title;
    document.title = name + ' | ' + defaultTitle;

    return () => {
      document.title = defaultTitle;
    };
  }, [name]);

  return (
    <div className={`${styles.container} ${name.toLowerCase()}`}>
      <Tabs activeTab={tab} onSetTab={handleTabChange} />

      <PlanetImage images={images} name={name} tab={tab} />

      <HeaderInfoBox name={name} source={tabContent.source}>
        {tabContent.content}
      </HeaderInfoBox>

      <DataBox>
        <DataItem title="Rotation time">{rotation}</DataItem>
        <DataItem title="Revolution time">{revolution}</DataItem>
        <DataItem title="Radius">{radius}</DataItem>
        <DataItem title="Average temp.">{temperature}</DataItem>
      </DataBox>
    </div>
  );
}

export default PlanetView;

// eslint-disable-next-line react-refresh/only-export-components
export const loader: LoaderFunction = async ({ params }): Promise<Planet | Response> => {
  if (!params.planet) return redirect('/mercury');

  const planet = await getPlanet(params.planet);
  if (planet) return planet;

  throw new Response('Not Found', { status: 404, statusText: 'Sorry, there is no such planet!' });
};
