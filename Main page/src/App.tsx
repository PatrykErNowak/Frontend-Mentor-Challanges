import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import WrapperContainer from './components/WrappperContainer';
import SolutionsList from './components/SolutionsList';

async function fetchSolutions(fn: CallableFunction) {
  const response = await fetch('./solutions.json');
  const data = await response.json();
  fn(data);
}

function App() {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    try {
      fetchSolutions(setSolutions);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <WrapperContainer>
      <Header></Header>
      <Main>
        <SolutionsList solutions={solutions}></SolutionsList>
      </Main>
      <Footer></Footer>
    </WrapperContainer>
  );
}

export default App;
