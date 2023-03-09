import { render, screen } from '@testing-library/react';
import SectionReferencesTechnos from './SectionReferencesTechnos';

import { getStaticProps } from '../../pages/index';

describe('SectionReferencesTechnos component tests', () => {
  test('SectionTitle and LogosWrapper should be in the document', async () => {
    const response = await getStaticProps();
    const technosTitle = response.props.allTitles.technos;
    const logosArray = response.props.logosArray.technos;
    render(
      <SectionReferencesTechnos
        section="technos"
        title={technosTitle}
        logos={logosArray}
      />,
    );

    expect(screen.getByTestId('sectionTitle')).toBeInTheDocument();
    expect(screen.getByTestId('logosWrapper')).toBeInTheDocument();
  });
});
