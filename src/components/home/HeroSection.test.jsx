import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('affiche l’image de fond si imageSrc est fourni', () => {
    render(<HeroSection imageSrc="/test.jpg">Contenu test</HeroSection>);
    const img = screen.getByAltText(/hero background/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('affiche le contenu enfant', () => {
    render(<HeroSection imageSrc="/test.jpg">Contenu test</HeroSection>);
    expect(screen.getByText('Contenu test')).toBeInTheDocument();
  });
});
