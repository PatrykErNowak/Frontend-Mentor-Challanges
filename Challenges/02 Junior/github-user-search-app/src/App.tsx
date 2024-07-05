import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Logo from './components/Logo';
import Main from './components/Main';
import SearchForm from './components/SearchForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import Wrapper from './components/Wrapper';
import GlobalStyles from './styles/GlobalStyles';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserInfoBox from './features/User/UserInfoBox';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Wrapper>
          <Header>
            <Logo />
            <ThemeSwitcher />
          </Header>
          <Main>
            <SearchForm />
            <UserInfoBox />
          </Main>
        </Wrapper>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
