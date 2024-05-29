import styles from './Hero.module.scss';

type HeroProps = {
  children: React.ReactElement[];
  classCSS: string;
};

function Hero({ children, classCSS }: HeroProps) {
  return <div className={`${styles.hero} ${classCSS}`}>{children}</div>;
}

export default Hero;
