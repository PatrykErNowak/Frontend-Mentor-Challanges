import styles from './CreatePlanSection.module.scss';
import { useMemo, useState } from 'react';
import Button from '../../../components/Button/Button';
import { Plan, PlanCategory } from './types';
import PlanSummaryText from './PlanSummaryText/PlanSummaryText';
import Card from './Card/Card';
import FormCollapseSection from './FormCollapseSection/FormCollapseSection';
import OrderSummaryModal from './OrderSummaryModal/OrderSummaryModal';

const pricing = {
  'every week': {
    '250g': '7.20',
    '500g': '13.00',
    '1000g': '22.00',
  },
  'every 2 weeks': {
    '250g': '9.60',
    '500g': '17.50',
    '1000g': '32.00',
  },
  'every month': {
    '250g': '12.00',
    '500g': '22.00',
    '1000g': '42.00',
  },
};

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
  const [showModal, setShowModal] = useState(false);

  const summaryPrice = useMemo(() => {
    if (plan.deliveries === 'every week' && plan.quantity !== null) return parseFloat(pricing[plan.deliveries][plan.quantity]) * 4;
    if (plan.deliveries === 'every 2 weeks' && plan.quantity !== null) return parseFloat(pricing[plan.deliveries][plan.quantity]) * 2;
    if (plan.deliveries === 'every month' && plan.quantity !== null) return parseFloat(pricing[plan.deliveries][plan.quantity]) * 1;
  }, [plan.deliveries, plan.quantity]);

  const isReadyToSend = useMemo(() => {
    if (plan.preferencees === 'capsule') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { grind: _, ...newPlan } = plan;
      return !Object.values(newPlan).includes(null);
    }
    return !Object.values(plan).includes(null);
  }, [plan]);

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
    setShowModal(true);
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
        <FormCollapseSection open={openedSection[0]} question="How do you drink your Coffee?">
          <Card questionLevel={0} onChangePlan={handlePlanChange} groupName={'preferencees'} title="capsule">
            Compatible with Nespresso systems and similar brewers
          </Card>
          <Card questionLevel={0} onChangePlan={handlePlanChange} groupName={'preferencees'} title="filter">
            For pour over or drip methods like Aeropress, Chemex, and V60
          </Card>
          <Card questionLevel={0} onChangePlan={handlePlanChange} groupName={'preferencees'} title="espresso">
            Dense and finely ground beans for an intense, flavorful experience
          </Card>
        </FormCollapseSection>

        <FormCollapseSection open={openedSection[1]} question="What type of coffee?">
          <Card questionLevel={1} onChangePlan={handlePlanChange} groupName={'beanType'} title="single origin">
            Distinct, high quality coffee from a specific family-owned farm
          </Card>
          <Card questionLevel={1} onChangePlan={handlePlanChange} groupName={'beanType'} title="decaf">
            Just like regular coffee, except the caffeine has been removed
          </Card>
          <Card questionLevel={1} onChangePlan={handlePlanChange} groupName={'beanType'} title="blended">
            Combination of two or three dark roasted beans of organic coffees
          </Card>
        </FormCollapseSection>

        <FormCollapseSection open={openedSection[2]} question="How much would you like?">
          <Card questionLevel={2} onChangePlan={handlePlanChange} groupName={'quantity'} title="250g">
            Perfect for the solo drinker. Yields about 12 delicious cups.
          </Card>
          <Card questionLevel={2} onChangePlan={handlePlanChange} groupName={'quantity'} title="500g">
            Perfect option for a couple. Yields about 40 delectable cups.
          </Card>
          <Card questionLevel={2} onChangePlan={handlePlanChange} groupName={'quantity'} title="1000g">
            Perfect for offices and events. Yields about 90 delightful cups.
          </Card>
        </FormCollapseSection>

        <FormCollapseSection open={openedSection[3]} active={plan.preferencees !== 'capsule'} question="Want us to grind them?">
          <Card questionLevel={3} onChangePlan={handlePlanChange} groupName={'grind'} title="wholebean">
            Best choice if you cherish the full sensory experience
          </Card>
          <Card questionLevel={3} onChangePlan={handlePlanChange} groupName={'grind'} title="filter">
            For drip or pour-over coffee methods such as V60 or Aeropress
          </Card>
          <Card questionLevel={3} onChangePlan={handlePlanChange} groupName={'grind'} title="cafetiére">
            Course ground beans specially suited for french press coffee
          </Card>
        </FormCollapseSection>

        <FormCollapseSection open={openedSection[4]} question="How often should we deliver?">
          <Card questionLevel={4} onChangePlan={handlePlanChange} groupName={'deliveries'} title="every week">
            ${pricing['every week'][plan.quantity || '250g']}
            per shipment. Includes free first-class shipping.
          </Card>
          <Card questionLevel={4} onChangePlan={handlePlanChange} groupName={'deliveries'} title="every 2 weeks">
            ${pricing['every 2 weeks'][plan.quantity || '250g']} per shipment. Includes free priority shipping.
          </Card>
          <Card questionLevel={4} onChangePlan={handlePlanChange} groupName={'deliveries'} title="every month">
            ${pricing['every month'][plan.quantity || '250g']} per shipment. Includes free priority shipping.
          </Card>
        </FormCollapseSection>
        <div className={styles.orderSummary}>
          <p className={styles.orderSummaryTitle}>Order summary</p>
          <PlanSummaryText plan={plan} />
        </div>
        <Button disabled={!isReadyToSend}>Create my plan!</Button>
      </form>
      {showModal && <OrderSummaryModal plan={plan} price={summaryPrice || 0} onCloseModal={() => setShowModal(false)} />}
    </section>
  );
}

export default CreatePlanSection;
