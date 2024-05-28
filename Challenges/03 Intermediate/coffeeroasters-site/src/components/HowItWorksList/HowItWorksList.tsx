import styles from './HowItWorksList.module.scss';

function HowItWorksList() {
  return (
    <ul className={styles.list}>
      <HowItWorksItem numb="01" title="Pick your coffee">
        Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all
        profiles every month for you to try out.
      </HowItWorksItem>
      <HowItWorksItem numb="02" title="Choose the frequency">
        Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our
        online portal.
      </HowItWorksItem>
      <HowItWorksItem numb="03" title="Receive and enjoy!">
        We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting
        experience.
      </HowItWorksItem>
    </ul>
  );
}

type HowItWorksItemProps = {
  numb: string;
  title: string;
  children: string;
};

function HowItWorksItem({ numb, title, children }: HowItWorksItemProps) {
  return (
    <li className={styles.item}>
      <span className={styles.numb}>{numb}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{children}</p>
    </li>
  );
}

export default HowItWorksList;
