import styles from './Tabs.module.css';

type TabsProps = {
  activeTab: string;
  onSetTab: (tab: string) => void;
};

function Tabs({ activeTab, onSetTab }: TabsProps) {
  return (
    <ul className={styles.list}>
      <Tab active={activeTab === 'overview'} onClick={onSetTab}>
        overview
      </Tab>
      <Tab active={activeTab === 'structure'} onClick={onSetTab}>
        structure
      </Tab>
      <Tab active={activeTab === 'surface'} onClick={onSetTab}>
        surface
      </Tab>
    </ul>
  );
}

export default Tabs;

function Tab({ children, active, onClick }: { children: string; active?: boolean; onClick: (p: string) => void }) {
  function handleClick() {
    onClick(children);
  }

  return (
    <li className={`${styles.listItem} ${active ? 'active' : ''}`}>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
