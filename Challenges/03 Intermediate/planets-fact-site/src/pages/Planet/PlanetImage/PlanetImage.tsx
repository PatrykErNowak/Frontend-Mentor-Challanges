import styles from './PlanetImage.module.css';

type PlanetImageProps = {
  tab: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  name: string;
};

function PlanetImage({ tab, images, name }: PlanetImageProps) {
  const mainImageSrc = tab === 'overview' || tab === 'surface' ? images.planet : images.internal;

  return (
    <div className={styles.imageBox} key={name}>
      <img src={mainImageSrc} alt={name} />
      {tab === 'surface' && <img src={images.geology} alt={`${name} surface geology`} className={styles.surface} />}
    </div>
  );
}

export default PlanetImage;
