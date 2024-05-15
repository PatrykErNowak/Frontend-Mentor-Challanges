import HeroTop from './components/HeroTop';
import BoxContainer from './components/BoxContainer';
import JobList from './components/JobList';
import { useState } from 'react';
import { useEffect } from 'react';
import FilterBox from './components/FilterBox';

function App() {
  const [jobsOffers, setJobsOffers] = useState([]);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function fetchJobsOffers() {
      try {
        setError(false);
        const response = await fetch('./data.json');
        const data = await response.json();
        setJobsOffers(data);
      } catch (error) {
        setError(true);
      }
    }
    fetchJobsOffers();
  }, []);

  function handleAddFilters(category) {
    if (filters.some((filter) => filter.toLowerCase() === category.toLowerCase())) return;
    setFilters((filter) => [...filter, category]);
  }
  function handleRemoveFilters(category) {
    if (category === 'all') {
      setFilters([]);
      return;
    }
    setFilters((filters) => filters.filter((item) => item.toLowerCase() !== category.toLowerCase()));
  }

  return (
    <div className="bg-main-bg min-h-screen">
      <HeroTop></HeroTop>
      <BoxContainer>
        {filters.length > 0 && <FilterBox onRemoveFilter={handleRemoveFilters} filters={filters}></FilterBox>}
        {error && <p>Sorry, there was a problem with fetching data.</p>}
        {jobsOffers.length > 0 ? <JobList onAddFilter={handleAddFilters} jobsOffers={jobsOffers}></JobList> : <p>Currently, there are no job offers</p>}
      </BoxContainer>
    </div>
  );
}

export default App;
