import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import WrapperContainer from './components/WrappperContainer';
import SolutionsList from './components/SolutionsList';
import FilterBox, { Techs } from './components/FiltersBox/FilterBox';
import { Solution } from './components/SolutionItem/types';
import Message from './components/Message/Message';

interface Data {
  techs: Techs;
  solutions: Solution[];
}

function App() {
  const [solutionsData, setSolutionsData] = useState<Data>({ solutions: [], techs: { build: [], frameworks: [], languages: [], styling: [] } });
  const [filteredSolutions, setFilteredSolutions] = useState([]);
  const [techFilters, setTechFilters] = useState<Array<string>>([]);
  const [diffLevelFilters, setDiffLevelFilters] = useState<Array<string>>([]);

  const { solutions, techs } = solutionsData;

  useEffect(() => {
    async function fetchSolutions() {
      try {
        const response = await fetch('./solutions.json');
        const data = await response.json();
        setSolutionsData(data);
        setFilteredSolutions(() =>
          data.solutions
            .filter((sol: Solution) => techFilters.every((item) => [...sol.technologies.map((tech) => tech.name), sol.level].includes(item)))
            .filter((sol: Solution) => (diffLevelFilters.length > 0 ? diffLevelFilters.some((filter) => filter === sol.level) : true))
        );
      } catch (error) {
        console.log(error);
      }
    }
    fetchSolutions();
  }, [techFilters, diffLevelFilters]);

  function handleAddTechFilters(filter: string) {
    const isTheSameFilter = techFilters.some((fil) => fil.toLowerCase() === filter.toLowerCase());

    if (isTheSameFilter) {
      handleRemoveFilters(filter);
      return;
    }
    setTechFilters((filters) => [...filters, filter]);
  }

  function handleRemoveFilters(filter: string) {
    setTechFilters((filters) => filters.filter((item) => item.toLowerCase() !== filter.toLowerCase()));
  }

  function handleAddDiffLevelFilters(filter: string) {
    const isTheSameFilter = diffLevelFilters.some((fil) => fil.toLowerCase() === filter.toLowerCase());

    if (isTheSameFilter) {
      handleRemoveDiffLevelFilters(filter);
      return;
    }
    setDiffLevelFilters((filters) => [...filters, filter]);
  }

  function handleRemoveDiffLevelFilters(filter: string) {
    setDiffLevelFilters((filters) => filters.filter((item) => item.toLowerCase() !== filter.toLowerCase()));
  }

  return (
    <WrapperContainer>
      <Header></Header>
      <Main>
        {solutions && techs && (
          <FilterBox solutions={solutions} techs={techs} onAddTechFilter={handleAddTechFilters} onAddDiffFilters={handleAddDiffLevelFilters} />
        )}
        {filteredSolutions.length > 0 ? <SolutionsList solutions={filteredSolutions}></SolutionsList> : <Message />}
      </Main>
      <Footer></Footer>
    </WrapperContainer>
  );
}

export default App;
