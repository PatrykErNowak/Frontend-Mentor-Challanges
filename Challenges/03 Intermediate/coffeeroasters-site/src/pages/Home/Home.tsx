import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import HeadingH1 from '../../components/HeadingH1/HeadingH1';
import Hero from '../../components/Hero/Hero';
import Text from '../../components/Text/Text';
import ChooseUsSection from './ChooseUsSection/ChooseUsSection';
import CollectionSection from './CollectionSection/CollectionSection';
import HowItWorksSection from './HowItWorksSection/HowItWorksSection';

function Home() {
  return (
    <>
      <main>
        <Hero>
          <HeadingH1>Great coffee made simple.</HeadingH1>
          <Text>
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door,
            at your schedule.
          </Text>
          <Button>Create your plan</Button>
        </Hero>
        <CollectionSection />
        <ChooseUsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
