import { render } from '@testing-library/react';
import SectionReferencesTechnos from './SectionReferencesTechnos';

describe('SectionReferencesTechnos component tests', () => {
  test('component should render', () => {
    render(<SectionReferencesTechnos section="technos" />);
  });
});
