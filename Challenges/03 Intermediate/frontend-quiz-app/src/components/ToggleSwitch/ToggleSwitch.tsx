import { useState } from 'react';
import styles from './ToggleSwitch.module.css';
import { ToggleSwitchProps } from './types';

function ToggleSwitch({ onSetToggle, ariaLabel }: ToggleSwitchProps) {
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
