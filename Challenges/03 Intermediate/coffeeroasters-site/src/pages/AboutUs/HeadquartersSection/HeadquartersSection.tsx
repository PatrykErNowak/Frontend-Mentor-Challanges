import styles from './HeadquartersSection.module.scss';
import australia from '../../../assets/aboutus/desktop/illustration-australia.svg';
import canada from '../../../assets/aboutus/desktop/illustration-canada.svg';
import uk from '../../../assets/aboutus/desktop/illustration-uk.svg';

function HeadquartersSection() {
  return (
    <section data-aos="fade-up" className={styles.section}>
      <h2 className={styles.title}>Our headquarters</h2>
      <ul className={styles.list}>
        <Item imgSrc={uk} title="United Kingdom">
          68 Asfordby Rd
          <br />
          Alcaston
          <br />
          SY6 1YA
          <br />
          <a href="tel:+44 1241 918425">+44 1241 918425</a>
        </Item>
        <Item imgSrc={canada} title="Canada">
          1528 Eglinton Avenue <br />
          Toronto <br />
          Ontario M4P 1A6 <br />
          <a href="tel:+1 416 485 2997">+1 416 485 2997</a>
        </Item>
        <Item imgSrc={australia} title="Australia">
          36 Swanston Street <br />
          Kewell <br />
          Victoria <br />
          <a href="tel:+61 4 9928 3629">+61 4 9928 3629</a>
        </Item>
      </ul>
    </section>
  );
}

export default HeadquartersSection;

type ItemProps = {
  imgSrc: string;
  title: string;
  children: React.ReactNode[];
};

function Item({ imgSrc, title, children }: ItemProps) {
  return (
    <li className={styles.item}>
      <img src={imgSrc} alt="" />
      <h3 className={styles.itemTitle}>{title}</h3>
      <address className={styles.itemAddress}>{children}</address>
    </li>
  );
}
