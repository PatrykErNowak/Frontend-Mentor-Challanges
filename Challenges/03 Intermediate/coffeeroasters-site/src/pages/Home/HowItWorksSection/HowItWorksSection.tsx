import HowItWorksList from '../../../components/HowItWorksList/HowItWorksList';
import LinkButton from '../../../components/LinkButton/LinkButton';
import styles from './HowItWorksSection.module.scss';

function HowItWorksSection() {
  return (
    <section data-aos="fade-up" className={styles.section}>
      <h2 className={styles.title}>How it works</h2>
      <HowItWorksList />
      <LinkButton to="/subscribe">Create your plan</LinkButton>
    </section>
  );
}

export default HowItWorksSection;
