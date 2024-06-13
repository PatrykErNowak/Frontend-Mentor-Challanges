import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout, { loader as allPlanetsLoader } from './ui/AppLayout/AppLayout';
import Planet, { loader as planetLoader } from './pages/Planet/Planet';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: allPlanetsLoader,
    children: [
      { path: '/', element: <Planet />, loader: planetLoader },
      { path: '/:planet', element: <Planet />, loader: planetLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
