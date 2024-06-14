import styles from './Planet.module.css';
import { redirect, useLoaderData } from 'react-router-dom';
import { getPlanet } from '../../services/apiPlanet';
import { Planet } from '../../services/types';
import Tabs from './Tabs/Tabs';
import { useState } from 'react';
import PlanetImage from './PlanetImage/PlanetImage';
import HeaderInfoBox from './HeaderInfoBox/HeaderInfoBox';

function PlanetView() {
  const { name, images, overview, structure, geology } = useLoaderData() as Planet;
  const [tab, setTab] = useState('overview');
  const tabContent = tab === 'overview' ? overview : tab === 'structure' ? structure : geology;

  function handleTabChange(tab: string) {
    setTab(tab);
  }

  return (
    <div className={`${styles.container} ${name.toLowerCase()}`}>
      <Tabs activeTab={tab} onSetTab={handleTabChange} />
      <PlanetImage images={images} name={name} tab={tab} />
      <HeaderInfoBox name={name} source={tabContent.source}>
        {tabContent.content}
      </HeaderInfoBox>
    </div>
  );
}

export default PlanetView;

export async function loader({ params }) {
  if (!params.planet) return redirect('/mercury');
  const planet = await getPlanet(params.planet);
  return planet;
}
