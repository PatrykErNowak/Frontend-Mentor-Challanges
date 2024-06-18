import styles from './Tabs.module.css';

type TabsProps = {
  activeTab: string;
  onSetTab: (tab: string) => void;
};

function Tabs({ activeTab, onSetTab }: TabsProps) {
  return (
    <ul className={styles.list} aria-label="Type of information">
      <Tab active={activeTab === 'overview'} number={1} value={'overview'} onClick={onSetTab}>
        overview
      </Tab>
      <Tab active={activeTab === 'structure'} number={2} value="structure" onClick={onSetTab}>
        <span>internal</span> structure
      </Tab>
      <Tab active={activeTab === 'surface'} number={3} value="surface" onClick={onSetTab}>
        surface <span>geology</span>
      </Tab>
    </ul>
  );
}

export default Tabs;

type TabProps = { children: React.ReactNode; active?: boolean; onClick: (p: string) => void; value: string; number: number };

function Tab({ children, active, onClick, value, number }: TabProps) {
  function handleClick() {
    onClick(value);
  }

  return (
    <li className={`${styles.listItem} ${active ? 'active' : ''}`}>
      <button onClick={handleClick} aria-current={active}>
        <span className={styles.number}>{String(number).padStart(2, '0')}</span>
        {children}
      </button>
    </li>
  );
}
