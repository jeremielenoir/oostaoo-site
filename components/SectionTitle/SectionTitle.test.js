import { render } from '@testing-library/react';
import SectionTitle from './SectionTitle';

describe('SectionTitle component tests', () => {
  test('component should render', () => {
    render(<SectionTitle section="technos" />);
  });
});
