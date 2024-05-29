import styles from './CommitmentSection.module.scss';
import commitmentHero from '../../../assets/aboutus/mobile/image-commitment.jpg';
import commitmentHeroDesktop from '../../../assets/aboutus/desktop/image-commitment.jpg';

function CommitmentSection() {
  return (
    <section className={styles.section}>
      <div className={styles.imageBox}>
        <img srcSet={`${commitmentHero} 480w, ${commitmentHeroDesktop} 800w`} sizes="(max-width: 1024px) 480px, 800px" src={commitmentHero} alt="" />
      </div>
      <div className={styles.contentBox}>
        <h2 className={styles.title}>Our commitment</h2>
        <p className={styles.desc}>
          We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best
          coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the
          challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through
          with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only
          the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
        </p>
      </div>
    </section>
  );
}

export default CommitmentSection;
