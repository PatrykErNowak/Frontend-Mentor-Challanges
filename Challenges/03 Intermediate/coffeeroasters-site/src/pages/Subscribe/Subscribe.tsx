import Footer from '../../components/Footer/Footer';
import HeadingH1 from '../../components/HeadingH1/HeadingH1';
import Hero from '../../components/Hero/Hero';
import Text from '../../components/Text/Text';
import CreatePlanSection from './CreatePlanSection/CreatePlanSection';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';
import styles from './Subscribe.module.scss';

function Subscribe() {
  return (
    <>
      <main>
        <Hero classCSS={styles.hero}>
          <HeadingH1>Create a plan</HeadingH1>
          <Text>
            Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to
            your door.
          </Text>
        </Hero>
        <HowItWorksSection />
        <CreatePlanSection />
      </main>
      <Footer />
    </>
  );
}

export default Subscribe;
