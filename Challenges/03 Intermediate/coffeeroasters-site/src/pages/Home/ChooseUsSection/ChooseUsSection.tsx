import Text from '../../../components/Text/Text';
import styles from './ChooseUsSection.module.scss';
import iconBean from '../../../assets/collection/icon-coffee-bean.svg';
import iconBenefits from '../../../assets/collection/icon-gift.svg';
import iconShipping from '../../../assets/collection/icon-truck.svg';

function ChooseUsSection() {
  return (
    <section className={styles.section}>
      <header>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <Text>
          A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers
          to give you a more impactful experience on every level.
        </Text>
      </header>
      <ul className={styles.list}>
        <Item imgSrc={iconBean} title="Best quality">
          Discover an endless variety of the world’s best artisan coffee from each of our roasters.
        </Item>
        <Item imgSrc={iconBenefits} title="Exclusive benefits">
          Special offers and swag when you subscribe, including 30% off your first shipment.
        </Item>
        <Item imgSrc={iconShipping} title="Free shipping">
          We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
        </Item>
      </ul>
    </section>
  );
}

export default ChooseUsSection;

type ItemProps = {
  children: string;
  title: string;
  imgSrc: string;
  classCSS?: string;
};

function Item({ imgSrc, title, children }: ItemProps) {
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
