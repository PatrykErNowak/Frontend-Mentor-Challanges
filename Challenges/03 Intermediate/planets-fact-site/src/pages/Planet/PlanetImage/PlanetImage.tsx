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
  return (
    <div className={styles.imageBox}>
      {tab === 'overview' && <img src={images.planet} alt={name} />}
      {tab === 'structure' && <img src={images.internal} alt={name} />}
      {tab === 'surface' && (
        <>
          <img src={images.planet} alt={name} />
          <img src={images.geology} alt={`${name} surface geology`} className={styles.surface} />
        </>
      )}
    </div>
  );
}

export default PlanetImage;
