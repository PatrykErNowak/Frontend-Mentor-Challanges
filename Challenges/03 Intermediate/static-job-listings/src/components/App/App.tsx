import HeroTop from '../HeroTop/HeroTop';
import BoxContainer from '../BoxContainer/BoxContainer';
import JobList from '../JobList/JobList';
import FilterBox from '../FilterBox/FilterBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { JobOffer } from './types';

function App() {
  const [jobsOffers, setJobsOffers] = useState<Array<JobOffer>>([]);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState<Array<string>>([]);

  useEffect(() => {
    async function fetchJobsOffers() {
      try {
        setError(false);
        const response = await fetch('./data.json');
        const data: Array<JobOffer> = await response.json();
        setJobsOffers(() => data.filter((job) => filters.every((item) => [job.role, job.level, ...job.languages, ...job.tools].includes(item))));
      } catch (error) {
        setError(true);
      }
    }
    fetchJobsOffers();
  }, [filters]);

  function handleAddFilters(category: string) {
    const isTheSameFilter = filters.some((filter) => filter.toLowerCase() === category.toLowerCase());

    if (isTheSameFilter) return;
    setFilters((filters) => [...filters, category]);
  }
  function handleRemoveFilters(category: string) {
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
