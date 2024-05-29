import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Subscribe from './pages/Subscribe/Subscribe';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
