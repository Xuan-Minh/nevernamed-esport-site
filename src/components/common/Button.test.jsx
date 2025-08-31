import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

// On importe jest-dom via le setup global déjà en place

describe('Button', () => {
  it('affiche le texte enfant', () => {
    render(<Button>Mon bouton</Button>);
    expect(screen.getByText('Mon bouton')).toBeInTheDocument();
  });

  it('appelle la fonction onClick au clic', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clique-moi</Button>);
    fireEvent.click(screen.getByText('Clique-moi'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('affiche l’icône flèche', () => {
    render(<Button>Test</Button>);
    const img = screen.getByAltText(/arrow icon/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src'); // le mock SVG retourne une chaîne vide
  });
});
