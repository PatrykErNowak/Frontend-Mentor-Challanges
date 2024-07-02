import { useDarkMode } from './context/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const { toggleDarkMode } = useDarkMode();
  return (
    <>
      <GlobalStyles />
      <div>github</div>
      <button onClick={toggleDarkMode}>dakr Toggle</button>
    </>
  );
}

export default App;
