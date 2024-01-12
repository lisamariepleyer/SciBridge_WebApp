import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders home page', () => {
  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
  expect(screen.getByText(/Hallo und herzlich Willkommen bei SciBridge!/i)).toBeInTheDocument();
});