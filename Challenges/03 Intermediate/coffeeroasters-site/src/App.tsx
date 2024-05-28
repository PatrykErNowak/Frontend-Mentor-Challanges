import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
