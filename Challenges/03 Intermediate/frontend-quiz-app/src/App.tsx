import styles from './App.module.css';
console.log(styles);
function App() {
  return <div className={`${styles.app} ${styles.light}`}></div>;
}

export default App;
