import Header from './components/Header';
import Logo from './components/Logo';
import ThemeSwitcher from './components/ThemeSwitcher';
import Wrapper from './components/Wrapper';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <Logo />
          <ThemeSwitcher />
        </Header>
      </Wrapper>
    </>
  );
}

export default App;
