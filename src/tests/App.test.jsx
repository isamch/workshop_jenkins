import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.jsx';
import { describe, it, expect } from 'vitest';

describe('Home Page', () => {
  it('renders home page text', () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
