import styles from './Hero.module.scss';

type HeroProps = {
  children: React.ReactElement[];
  classCSS: string;
};

function Hero({ children, classCSS }: HeroProps) {
  return <header className={`${styles.hero} ${classCSS}`}>{children}</header>;
}

export default Hero;
