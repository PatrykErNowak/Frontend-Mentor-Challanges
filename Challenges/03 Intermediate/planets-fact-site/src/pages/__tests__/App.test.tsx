import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { LoaderFunction, RouterProvider, createMemoryRouter } from 'react-router-dom';
import AppLayout from '../../ui/AppLayout/AppLayout';
import PlanetView from '../Planet/Planet';
import Error from '../Error/Error';

describe('App integration', () => {
  const planets = ['mercury', 'venus', 'earth', 'mars'];

  const planetMars = {
    name: 'Mars',
    overview: {
      content:
        'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
      source: 'https://en.wikipedia.org/wiki/Mars',
    },
    structure: {
      content:
        'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
      source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
    },
    geology: {
      content:
        'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
      source: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
    },
    rotation: '1.03 Days',
    revolution: '1.88 Years',
    radius: '3,389.5 KM',
    temperature: '-28°c',
    images: {
      planet: './assets/planet-mars.svg',
      internal: './assets/planet-mars-internal.svg',
      geology: './assets/geology-mars.png',
    },
  };

  const loader: LoaderFunction = ({ params }) => {
    if (params.planet === 'mars') return planetMars;
    if (params.planet !== 'mars') throw new Response('Planet not found', { status: 404, statusText: 'Planet not found' });
    return null;
  };

  const router = createMemoryRouter([
    {
      element: <AppLayout />,
      loader: () => planets,
      children: [
        { path: '/', element: <PlanetView />, loader: () => planetMars },
        { path: '/:planet', element: <PlanetView />, loader: loader, errorElement: <Error /> },
      ],
    },
  ]);

  test('Change pathname after clicking "Mars" link in navigation', async () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const navLink = screen.getByRole('link', { name: 'mars' });
    await userEvent.click(navLink);

    const pathname = router.state.location.pathname;
    expect(pathname).toEqual('/mars');
  });

  test('Render Mars planet page after clicking it in navigation', async () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const navLink = screen.getByRole('link', { name: 'mars' });
    await userEvent.click(navLink);

    const planetHeading = screen.getByRole('heading');
    const planetDesc = screen.getByRole('main');

    expect(planetHeading).toHaveTextContent(planetMars.name);
    expect(planetDesc).toHaveTextContent(planetMars.overview.content);
  });

  test('Render Error view when planet URL is incorrect', async () => {
    render(<RouterProvider router={router}></RouterProvider>);

    await act(async () => {
      await router.navigate('/mars2');
    });

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('Oops!');
  });
});
