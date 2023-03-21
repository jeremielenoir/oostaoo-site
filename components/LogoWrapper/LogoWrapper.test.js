import { render, screen, waitFor } from '@testing-library/react';
import LogoWrapper from './LogosWrapper';

import { getStaticProps } from '../../pages/index';

describe('LogoWrapper component tests', () => {
  beforeEach(async () => {
    const response = await getStaticProps();
    const technosLogos = response.props.logosArray.technos;
    render(<LogoWrapper logos={technosLogos} section="technos" />);
  });

  test('component should have the proper amount of logos', async () => {
    const response = await getStaticProps();
    const technosLogos = response.props.logosArray.technos;
    technosLogos
      .map((logoElement) => screen.getByAltText(`logo ${logoElement}`))
      .forEach((logoElement) => expect(logoElement).toBeInTheDocument());
  });

  test('images element should have the correct src and alt attributes', async () => {
    const response = await getStaticProps();
    const technosLogos = response.props.logosArray.technos;
    technosLogos
      .map((logoElement) => screen.getByAltText(`logo ${logoElement}`))
      .forEach(async (imgElement, index) => {
        await waitFor(
          () =>
            // eslint-disable-next-line
            expect(imgElement).toHaveAttribute(
              'src',
              `/assets/technos/${technosLogos[index]}.png`,
            ),
          // eslint-disable-next-line
        ); // in next app there is a lazy load on image component
        expect(imgElement).toHaveAttribute(
          'alt',
          `logo ${technosLogos[index]}`,
        );
      });
  });
});
