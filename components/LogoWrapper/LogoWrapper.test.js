import { render, screen, waitFor } from '@testing-library/react';
import LogoWrapper from './LogosWrapper';

import logoArray from '../../assets/Logos';

describe('LogoWrapper component tests', () => {
  test('component should render', () => {
    render(<LogoWrapper logos={['']} section="references" />);
  });

  beforeEach(() => render(<LogoWrapper logos={logoArray.technos} section="technos" />));

  test('component should have the proper amount of logos', () => {
    logoArray.technos
      .map((logoElement) => screen.getByAltText(`logo ${logoElement}`))
      .forEach((logoElement) => expect(logoElement).toBeInTheDocument());
  });

  test('images element should have the correct src and alt attributes', () => {
    logoArray.technos
      .map((logoElement) => screen.getByAltText(`logo ${logoElement}`))
      .forEach(async (imgElement, index) => {
        await waitFor(() => expect(imgElement).toHaveAttribute('src', `/assets/technos/${logoArray.technos[index]}.png`)); // in next app there is a lazy load on image component
        expect(imgElement).toHaveAttribute('alt', `logo ${logoArray.technos[index]}`);
      });
  });
});
