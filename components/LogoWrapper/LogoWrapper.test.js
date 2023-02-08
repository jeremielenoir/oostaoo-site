import { render, screen } from '@testing-library/react';
import LogoWrapper from './LogosWrapper';

import logoArray from '../../assets/Logos';

describe('LogoWrapper component tests', () => {
  test('component should render', () => {
    render(<LogoWrapper logos={['']} section="technos" />);
  });

  beforeEach(() => render(<LogoWrapper logos={logoArray.technos} section="technos" />));

  test('component should have images with the correct alt attributes', () => {
    logoArray.technos
      .map((logoElement) => screen.getByAltText(`logo ${logoElement}`))
      .forEach((imageAlt) => expect(imageAlt).toBeInTheDocument());
  });
});
