import { DarkModeProvider } from './context/DarkModeContext';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <DarkModeProvider>
        <GlobalStyles />
        <div>github</div>
      </DarkModeProvider>
    </>
  );
}

export default App;
