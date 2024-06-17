import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout, { loader as allPlanetsLoader } from './ui/AppLayout/AppLayout';
import Planet, { loader as planetLoader } from './pages/Planet/Planet';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    loader: allPlanetsLoader,
    children: [
      { path: '/', element: <Planet />, loader: planetLoader },
      { path: '/:planet', element: <Planet />, loader: planetLoader, errorElement: <Error /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
