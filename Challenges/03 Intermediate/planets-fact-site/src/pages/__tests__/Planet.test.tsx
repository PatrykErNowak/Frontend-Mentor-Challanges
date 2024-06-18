import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import PlanetView from '../Planet/Planet';
import userEvent from '@testing-library/user-event';

const planetMercury = {
  name: 'Mercury',
  overview: {
    content:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
  },
  structure: {
    content:
      "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
  },
  geology: {
    content:
      "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
    source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
  },
  rotation: '58.6 Days',
  revolution: '87.97 Days',
  radius: '2,439.7 KM',
  temperature: '430°c',
  images: {
    planet: './assets/planet-mercury.svg',
    internal: './assets/planet-mercury-internal.svg',
    geology: './assets/geology-mercury.png',
  },
};

describe('Planet component', () => {
  const router = createMemoryRouter([{ path: '/', element: <PlanetView />, loader: () => planetMercury }]);

  test('Render planet heading ', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const heading = screen.getByRole('heading');

    expect(heading).toHaveTextContent(planetMercury.name);
  });

  test('Render planet data ', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const rotation = screen.getByText('rotation time', { exact: false }).parentElement!;
    const revolution = screen.getByText('revolution time', { exact: false }).parentElement!;
    const radius = screen.getByText('radius', { exact: false }).parentElement!;
    const temp = screen.getByText('average temp.', { exact: false }).parentElement!;

    expect(rotation).toHaveTextContent(planetMercury.rotation);
    expect(revolution).toHaveTextContent(planetMercury.revolution);
    expect(radius).toHaveTextContent(planetMercury.radius);
    expect(temp).toHaveTextContent(planetMercury.temperature);
  });

  test('Overview tab active on init state ', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const activeTab = screen.getByRole('button', { current: true });

    expect(activeTab).toHaveTextContent('overview');
  });

  test('Render Overview description when Overview tab is active', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const activeTab = screen.getByRole('button', { current: true });
    const header = screen.getByRole('banner');

    expect(activeTab).toHaveTextContent('overview');
    expect(header).toHaveTextContent(planetMercury.overview.content);
  });

  test('Render Structure description when Structure tab is active', async () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const tabsList = screen.getByLabelText('Type of information');
    const structureTab = within(tabsList).getByText('structure', { exact: false });

    await userEvent.click(structureTab);

    const activeTab = screen.getByRole('button', { current: true });
    const header = screen.getByRole('banner');

    expect(activeTab).toHaveTextContent('structure');
    expect(header).toHaveTextContent(planetMercury.structure.content);
  });

  test('Render Surface description when Surface tab is active', async () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const tabsList = screen.getByLabelText('Type of information');
    const surfaceTab = within(tabsList).getByText('surface', { exact: false });

    await userEvent.click(surfaceTab);

    const activeTab = screen.getByRole('button', { current: true });
    const header = screen.getByRole('banner');

    expect(activeTab).toHaveTextContent('surface');
    expect(header).toHaveTextContent(planetMercury.geology.content);
  });
});
