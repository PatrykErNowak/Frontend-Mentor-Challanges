import HowItWorksList from '../../../components/HowItWorksList/HowItWorksList';
import styles from './HowItWorksSection.module.scss';

function HowItWorksSection() {
  return (
    <section data-aos="fade-up" className={styles.section}>
      <HowItWorksList markerColor="dark" />
    </section>
  );
}

export default HowItWorksSection;
