import HeroTop from './components/HeroTop';
import BoxContainer from './components/BoxContainer';
import JobList from './components/JobList';

function App() {
  return (
    <div className="bg-main-bg min-h-screen">
      <HeroTop></HeroTop>
      <BoxContainer>
        <JobList></JobList>
      </BoxContainer>
    </div>
  );
}

export default App;
