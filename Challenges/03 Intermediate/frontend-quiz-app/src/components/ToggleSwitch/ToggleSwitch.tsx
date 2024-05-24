import { useState } from 'react';
import styles from './ToggleSwitch.module.css';

function ToggleSwitch({ onSetToggle, ariaLabel }: { onSetToggle: (p: boolean) => void; ariaLabel: string }) {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggleSwitch() {
    setIsToggle((prev) => !prev);
    onSetToggle(isToggle);
  }

  return (
    <label aria-label={ariaLabel} className={styles.switch}>
      <input type="checkbox" className={styles.checkbox} checked={isToggle} onChange={handleToggleSwitch} />
      <span className={styles.slider}></span>
    </label>
  );
}

export default ToggleSwitch;
