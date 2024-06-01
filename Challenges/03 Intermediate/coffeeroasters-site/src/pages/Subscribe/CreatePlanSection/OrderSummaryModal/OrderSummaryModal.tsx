import { useEffect } from 'react';
import Button from '../../../../components/Button/Button';
import PlanSummaryText from '../PlanSummaryText/PlanSummaryText';
import { Plan } from '../types';
import styles from './OrderSummaryModal.module.scss';

function isSmallScreen() {
  const screen = window.screen.width;
  return screen < 768;
}

function OrderSummaryModal({ plan, price, onCloseModal }: { plan: Plan; price: number; onCloseModal: () => void }) {
  useEffect(() => {
    function closeModalByKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onCloseModal();
    }
    window.addEventListener('keydown', closeModalByKey);

    return () => window.removeEventListener('keydown', closeModalByKey);
  }, [onCloseModal]);

  function handleCloseModal() {
    onCloseModal();
  }

  function handleSendOrder() {
    console.log('Send Order');
  }

  return (
    <div className={styles.modalBg} onClick={handleCloseModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2>Order Summary</h2>
        </header>
        <div className={styles.content}>
          <PlanSummaryText plan={plan} />
          <p className={styles.moreInfo}>
            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at
            the checkout.
          </p>
          {!isSmallScreen() && <strong className={styles.price}>${price.toFixed(2)}/mo</strong>}
          <Button onClick={handleSendOrder}>Checkout {isSmallScreen() && <span>- ${price.toFixed(2)} / mo</span>}</Button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryModal;
