import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader.tsx';

describe('AppHeader', () => {
  const title: string = 'My Title';
  const subtitle: string = 'My Subtitle';

  describe('Render', () => {
    it('should render the vite and react logo', () => {
      render(
        <AppHeader
          title={title}
          subtitle={subtitle}
        />
      );

      const viteLogoElement: HTMLElement = screen.getByAltText('Vite');
      const reactLogoElement: HTMLElement = screen.getByAltText('React');

      expect(viteLogoElement).toBeInTheDocument();
      expect(reactLogoElement).toBeInTheDocument();
      expect(reactLogoElement).toHaveAttribute(
        'src',
        '/src/AppHeader/assets/react.svg'
      );
    });

    it('should render the given title and subtitle', () => {
      render(
        <AppHeader
          title={title}
          subtitle={subtitle}
        />
      );

      const titleElement: HTMLElement = screen.getByText(title);
      const subtitleElement: HTMLElement = screen.getByText(subtitle);

      expect(titleElement).toBeInTheDocument();
      expect(subtitleElement).toBeInTheDocument();
    });
  });
});
