import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.tsx';

describe('App', () => {
  describe('Render', () => {
    it('should render the application header', () => {
      render(<App />);

      const titleElement: HTMLElement = screen.getByText('Vite + React');
      const subtitleElement: HTMLElement = screen.getByText('Starter App');

      expect(titleElement).toBeInTheDocument();
      expect(subtitleElement).toBeInTheDocument();
    });

    it('should render a counter set at zero', () => {
      render(<App />);

      const counterElement: HTMLElement = screen.getByText('Count is: 0');

      expect(counterElement).toBeInTheDocument();
    });
  });
});
