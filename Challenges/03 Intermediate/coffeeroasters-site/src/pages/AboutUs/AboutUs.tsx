import Footer from '../../components/Footer/Footer';
import HeadingH1 from '../../components/HeadingH1/HeadingH1';
import Hero from '../../components/Hero/Hero';
import Text from '../../components/Text/Text';
import styles from './AboutUs.module.scss';
import CommitmentSection from './CommitmentSection/CommitmentSection';
import HeadquartersSection from './HeadquartersSection/HeadquartersSection';
import QualitySection from './QualitySection/QualitySection';

function AboutUs() {
  return (
    <>
      <main>
        <Hero classCSS={styles.hero}>
          <HeadingH1>About us</HeadingH1>
          <Text>
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to
            bring the perfect cup - from bean to brew - in every shipment.
          </Text>
        </Hero>
        <CommitmentSection />
        <QualitySection />
        <HeadquartersSection />
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
