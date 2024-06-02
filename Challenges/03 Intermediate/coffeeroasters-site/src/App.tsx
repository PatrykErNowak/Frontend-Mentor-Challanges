import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Subscribe from './pages/Subscribe/Subscribe';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
