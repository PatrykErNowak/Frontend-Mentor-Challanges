import styles from './CollectionSection.module.scss';
import granEspresso from '../../../assets/collection/image-gran-espresso.png';
import planalto from '../../../assets/collection/image-planalto.png';
import picollo from '../../../assets/collection//image-piccollo.png';
import danche from '../../../assets/collection/image-danche.png';

function CollectionSection() {
  return (
    <section data-aos="fade-up" className={styles.collection}>
      <h2 className={styles.title}>our collection</h2>
      <ul className={styles.list}>
        <FeatureItem imgSrc={granEspresso} title="Gran Espresso">
          Light and flavorful blend with cocoa and black pepper for an intense experience
        </FeatureItem>
        <FeatureItem imgSrc={planalto} title="Planalto">
          Brazilian dark roast with rich and velvety body, and hints of fruits and nuts
        </FeatureItem>
        <FeatureItem imgSrc={picollo} title="Picollo">
          Mild and smooth blend featuring notes of toasted almond and dried cherry
        </FeatureItem>
        <FeatureItem imgSrc={danche} title="Danche">
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </FeatureItem>
      </ul>
    </section>
  );
}

export default CollectionSection;

type ItemProps = {
  children: string;
  title: string;
  imgSrc: string;
  classCSS?: string;
};

function FeatureItem({ imgSrc, title, children }: ItemProps) {
  return (
    <li className={styles.item}>
      <img className={styles.itemImg} src={imgSrc} alt="" />

      <div>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDesc}>{children}</p>
      </div>
    </li>
  );
}
