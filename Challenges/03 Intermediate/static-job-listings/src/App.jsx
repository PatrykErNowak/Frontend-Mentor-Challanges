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
        setJobsOffers(() => data.filter((job) => filters.every((item) => [job.role, job.level, ...job.languages, ...job.tools].includes(item))));
      } catch (error) {
        setError(true);
      }
    }
    fetchJobsOffers();
  }, [filters]);

  function handleAddFilters(category) {
    const isTheSameFilter = filters.some((filter) => filter.toLowerCase() === category.toLowerCase());

    if (isTheSameFilter) return;
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
      <HeroTop />
      <BoxContainer>
        {filters.length > 0 && <FilterBox onRemoveFilter={handleRemoveFilters} filters={filters} />}
        {jobsOffers.length > 0 ? <JobList onAddFilter={handleAddFilters} jobsOffers={jobsOffers}></JobList> : <p>Currently, there are no job offers</p>}
        {error && <p>Sorry, there was a problem with fetching data.</p>}
      </BoxContainer>
    </div>
  );
}

export default App;
