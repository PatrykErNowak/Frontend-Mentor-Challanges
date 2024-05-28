import styles from './Hero.module.scss';

type HeroProps = {
  children: React.ReactElement[];
};

function Hero({ children }: HeroProps) {
  return <div className={styles.hero}>{children}</div>;
}

export default Hero;
