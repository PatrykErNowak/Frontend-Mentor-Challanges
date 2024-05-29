import HowItWorksList from '../../../components/HowItWorksList/HowItWorksList';
import styles from './HowItWorksSection.module.scss';

function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <HowItWorksList markerColor="dark" />
    </section>
  );
}

export default HowItWorksSection;
