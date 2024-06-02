import styles from './QualitySection.module.scss';
import qualityImg from '../../../assets/aboutus/mobile/image-quality.jpg';
import qualityImgDesktop from '../../../assets/aboutus/desktop/image-quality.jpg';
import Text from '../../../components/Text/Text';

function QualitySection() {
  return (
    <section data-aos="fade-up" className={styles.section}>
      <div className={styles.imageBox}>
        <picture>
          <source media="(max-width: 1024px)" srcSet={qualityImg} />
          <source media="(min-width: 1025px)" srcSet={qualityImgDesktop} />
          <img src={qualityImg} alt="" />
        </picture>
      </div>
      <div className={styles.contentBox}>
        <h2 className={styles.title}> Uncompromising quality</h2>
        <Text>
          Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control
          program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
          consistent, user-friendly coffee, so that brewing is easy and enjoyable.
        </Text>
      </div>
    </section>
  );
}

export default QualitySection;
