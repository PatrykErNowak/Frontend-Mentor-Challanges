import HeroTop from './components/HeroTop';
import BoxContainer from './components/BoxContainer';
import JobList from './components/JobList';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [jobsOffers, setJobsOffers] = useState([]);
  const [error, setError] = useState(false);

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

  return (
    <div className="bg-main-bg min-h-screen">
      <HeroTop></HeroTop>
      <BoxContainer>
        {error && <p>Sorry, there was a problem with fetching data.</p>}
        {jobsOffers.length > 0 ? <JobList jobsOffers={jobsOffers}></JobList> : <p>Currently, there are no job offers</p>}
      </BoxContainer>
    </div>
  );
}

export default App;
