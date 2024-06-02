import { Suspense, lazy, useEffect } from 'react';
const Home = lazy(() => import('./pages/Home/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Subscribe = lazy(() => import('./pages/Subscribe/Subscribe'));
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import ScrollToTop from './utils/ScrollToTop';
import SpinnerFullPage from './components/SpinnerFullPage/SpinnerFullPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      once: true,
      offset: 250,
    });
  }, []);
  return (
    <Wrapper>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/subscribe" element={<Subscribe />} />
          </Routes>
          <ScrollToTop />
        </Suspense>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
