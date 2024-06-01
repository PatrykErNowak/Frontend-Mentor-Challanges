import styles from './FormCollapseSection.module.scss';
import { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';

type FormCollapseSectionProps = {
  question: string;
  children: React.ReactElement[];
  open?: boolean;
  active?: boolean;
};

function FormCollapseSection({ question, children, open = false, active = true }: FormCollapseSectionProps) {
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
      <button type="button" className={styles.button} onClick={handleStateChange} aria-hidden={true}>
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
export default FormCollapseSection;
