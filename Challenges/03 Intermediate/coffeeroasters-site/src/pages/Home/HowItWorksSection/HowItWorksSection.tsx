import Button from '../../../components/Button/Button';
import HowItWorksList from '../../../components/HowItWorksList/HowItWorksList';
import styles from './HowItWorksSection.module.scss';

function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How it works</h2>
      <HowItWorksList />
      <Button>Create your plan</Button>
    </section>
  );
}

export default HowItWorksSection;
