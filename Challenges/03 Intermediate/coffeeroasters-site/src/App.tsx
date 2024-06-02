import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./pages/Home/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Subscribe = lazy(() => import('./pages/Subscribe/Subscribe'));
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import ScrollToTop from './utils/ScrollToTop';
import SpinnerFullPage from './components/SpinnerFullPage/SpinnerFullPage';

function App() {
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
