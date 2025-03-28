import { render, screen } from '@testing-library/react';
import App from './App';

  test('renders Home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/home/i)).toBeInTheDocument(); // Replace with actual Home page text
  });

  test('renders About page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/about/i)).toBeInTheDocument(); // Replace with actual About page text
  });

  test('renders NotFound page for invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/invalid-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/not found/i)).toBeInTheDocument(); // Replace with NotFound page text
  });