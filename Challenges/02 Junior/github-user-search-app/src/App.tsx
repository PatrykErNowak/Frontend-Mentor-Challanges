import Header from './components/Header';
import Logo from './components/Logo';
import Main from './components/Main';
import SearchForm from './components/SearchForm';
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
        <Main>
          <SearchForm />
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
