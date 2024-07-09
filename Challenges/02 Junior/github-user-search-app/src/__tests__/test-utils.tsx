import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { DarkModeProvider } from '../context/DarkModeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </DarkModeProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render, queryClient as testQueryClient };
