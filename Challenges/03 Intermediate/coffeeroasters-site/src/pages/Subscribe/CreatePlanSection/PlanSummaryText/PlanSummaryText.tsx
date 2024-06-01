import { Plan } from '../types';
import styles from './PlanSummaryText.module.scss';

function PlanSummaryText({ plan }: { plan: Plan }) {
  return (
    <p className={styles.text}>
      “I drink my coffee {plan.preferencees === 'capsule' ? 'using' : `as`} <span>{plan.preferencees || '_____'}</span>, with a{' '}
      <span>{plan.beanType || '_____'}</span> type of bean. <span>{plan.quantity || '_____'}</span>{' '}
      {plan.preferencees !== 'capsule' && plan.preferencees !== null && `ground ala `}
      {plan.preferencees !== 'capsule' && <span>{plan.grind}</span>}, sent to me <span>{plan.deliveries || '_____'}</span>.”
    </p>
  );
}

export default PlanSummaryText;
