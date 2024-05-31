import { Collapse } from 'react-collapse';
import styles from './CreatePlanSection.module.scss';
import { useEffect, useState } from 'react';

type PlanCategory = 'preferencees' | 'beanType' | 'quantity' | 'grind' | 'deliveries';
interface Plan {
  preferencees: 'capsule' | 'filter' | 'espresso' | null;
  beanType: 'single origin' | 'decaf' | 'blender' | null;
  quantity: '250g' | '500g' | '1000g' | null;
  grind: 'wholebean' | 'filter' | 'cafetiére' | null;
  deliveries: 'every week' | 'every 2 weeks' | 'every month' | null;
}
const initPlan = {
  preferencees: null,
  beanType: null,
  quantity: null,
  grind: null,
  deliveries: null,
};

function CreatePlanSection() {
  const [plan, setPlan] = useState<Plan>(initPlan);
  const [openedSection, setOpenedSection] = useState<boolean[]>([true, false, false, false, false]);
  const [currentSection, setCurrentSection] = useState(0);

  function handlePlanChange(planCategory: PlanCategory, value: string, questionLevel: number) {
    setOpenedSection((prev) => prev.map((el, i) => (i === questionLevel ? true : el)));
    setCurrentSection((prev) => {
      if (prev === 4) return prev;
      return questionLevel;
    });
    setPlan((prev) => {
      return { ...prev, [planCategory]: value };
    });
  }

  function toggleSectionFromMenu(index: number) {
    setOpenedSection((prev) => prev.map((el, i) => (i === index ? !el : el)));
  }

  function handleForm(e: React.SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <section className={styles.section}>
      <ol className={styles.listMenu}>
        <li onClick={() => toggleSectionFromMenu(0)} className={`${styles.listMenuItem} ${currentSection === 0 ? 'active' : ''}`}>
          <span>01</span> preferences
        </li>
        <li onClick={() => toggleSectionFromMenu(1)} className={`${styles.listMenuItem} ${currentSection === 1 ? 'active' : ''}`}>
          <span>02</span> Bean Type
        </li>
        <li onClick={() => toggleSectionFromMenu(2)} className={`${styles.listMenuItem} ${currentSection === 2 ? 'active' : ''}`}>
          <span>03</span> Quantity
        </li>
        <li
          onClick={() => toggleSectionFromMenu(3)}
          className={`${styles.listMenuItem} ${plan.preferencees === 'capsule' ? 'inactive' : currentSection === 3 ? 'active' : ''}`}>
          <span>04</span> Grind Option
        </li>
        <li onClick={() => toggleSectionFromMenu(4)} className={`${styles.listMenuItem} ${currentSection === 4 ? 'active' : ''}`}>
          <span>05</span> Deliveries
        </li>
      </ol>

      <form className={styles.form} onSubmit={handleForm}>
        <CollapseSection open={openedSection[0]} question="How do you drink your Coffee?">
          <Card questionLevel={0} onChangePlan={handlePlanChange} groupName={'preferencees'} title="capsule">
            Compatible with Nespresso systems and similar brewers
          </Card>
          <Card questionLevel={0} onChangePlan={handlePlanChange} groupName={'preferencees'} title="filter">
            For pour over or drip methods like Aeropress, Chemex, and V60
          </Card>
          <Card questionLevel={0} onChangePlan={handlePlanChange} groupName={'preferencees'} title="espresso">
            Dense and finely ground beans for an intense, flavorful experience
          </Card>
        </CollapseSection>

        <CollapseSection open={openedSection[1]} question="What type of coffee?">
          <Card questionLevel={1} onChangePlan={handlePlanChange} groupName={'beanType'} title="single origin">
            Distinct, high quality coffee from a specific family-owned farm
          </Card>
          <Card questionLevel={1} onChangePlan={handlePlanChange} groupName={'beanType'} title="decaf">
            Just like regular coffee, except the caffeine has been removed
          </Card>
          <Card questionLevel={1} onChangePlan={handlePlanChange} groupName={'beanType'} title="blended">
            Combination of two or three dark roasted beans of organic coffees
          </Card>
        </CollapseSection>

        <CollapseSection open={openedSection[2]} question="How much would you like?">
          <Card questionLevel={2} onChangePlan={handlePlanChange} groupName={'quantity'} title="250g">
            Perfect for the solo drinker. Yields about 12 delicious cups.
          </Card>
          <Card questionLevel={2} onChangePlan={handlePlanChange} groupName={'quantity'} title="500g">
            Perfect option for a couple. Yields about 40 delectable cups.
          </Card>
          <Card questionLevel={2} onChangePlan={handlePlanChange} groupName={'quantity'} title="1000g">
            Perfect for offices and events. Yields about 90 delightful cups.
          </Card>
        </CollapseSection>

        <CollapseSection open={openedSection[3]} active={plan.preferencees !== 'capsule'} question="Want us to grind them?">
          <Card questionLevel={3} onChangePlan={handlePlanChange} groupName={'grind'} title="wholebean">
            Best choice if you cherish the full sensory experience
          </Card>
          <Card questionLevel={3} onChangePlan={handlePlanChange} groupName={'grind'} title="filter">
            For drip or pour-over coffee methods such as V60 or Aeropress
          </Card>
          <Card questionLevel={3} onChangePlan={handlePlanChange} groupName={'grind'} title="cafetiére">
            Course ground beans specially suited for french press coffee
          </Card>
        </CollapseSection>

        <CollapseSection open={openedSection[4]} question="Want us to deliveries them?">
          <Card questionLevel={4} onChangePlan={handlePlanChange} groupName={'deliveries'} title="every week">
            $7.20 per shipment. Includes free first-class shipping.
          </Card>
          <Card questionLevel={4} onChangePlan={handlePlanChange} groupName={'deliveries'} title="every 2 weeks">
            $9.60 per shipment. Includes free priority shipping.
          </Card>
          <Card questionLevel={4} onChangePlan={handlePlanChange} groupName={'deliveries'} title="every month">
            $12.00 per shipment. Includes free priority shipping.
          </Card>
        </CollapseSection>
      </form>
    </section>
  );
}

export default CreatePlanSection;

type CollapseSectionProps = {
  question: string;
  children: React.ReactElement[];
  open?: boolean;
  active?: boolean;
};

function CollapseSection({ question, children, open = false, active = true }: CollapseSectionProps) {
  const [isOpen, setIsOpen] = useState(open);
  const [isActive, setIsActive] = useState(active);
  const iconClass = isOpen ? 'iconClose' : '';

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  useEffect(() => {
    setIsActive(active);
    if (!active) setIsOpen(false);
  }, [active]);

  function handleStateChange() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`${styles.collapse} ${!isActive ? 'disabled' : ''}`} aria-hidden={!active}>
      <button className={styles.button} onClick={handleStateChange} aria-hidden={true}>
        <span className={styles.question}>{question}</span>
        <span className={`${styles.icon} ${iconClass}`}>
          <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero" />
          </svg>
        </span>
      </button>
      <Collapse isOpened={isOpen}>
        <fieldset className={styles.form}>
          <legend className={styles.legend}>{question}</legend>
          {children}
        </fieldset>
      </Collapse>
    </div>
  );
}

type CardProps = {
  groupName: PlanCategory;
  title: string;
  children: string;
  onChangePlan: (plan: PlanCategory, value: string, questionLevel: number) => void;
  questionLevel: number;
};

function Card({ groupName, title, children, onChangePlan, questionLevel }: CardProps) {
  function handleChange() {
    onChangePlan(groupName, title, questionLevel);
  }

  return (
    <label htmlFor={`${groupName}-${title}`} className={styles.card}>
      <input onChange={handleChange} type="radio" name={groupName} id={`${groupName}-${title}`} value={title} className={styles.radio} />
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{children}</p>
    </label>
  );
}
