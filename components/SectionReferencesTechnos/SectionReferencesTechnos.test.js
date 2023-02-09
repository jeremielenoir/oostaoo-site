import { render, screen } from '@testing-library/react';
import SectionReferencesTechnos from './SectionReferencesTechnos';

describe('SectionReferencesTechnos component tests', () => {
  test('component should render', () => {
    render(<SectionReferencesTechnos section="technos" />);
  });

  test('SectionTitle and LogosWrapper should be in the document', () => {
    render(<SectionReferencesTechnos section="technos" />);

    expect(screen.getByTestId('sectionTitle')).toBeInTheDocument();
    expect(screen.getByTestId('logosWrapper')).toBeInTheDocument();
  });
});
