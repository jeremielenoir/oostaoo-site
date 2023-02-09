import { render } from '@testing-library/react';
import SectionTitle from './SectionTitle';

import titles from '../../assets/Titles';

describe('SectionTitle component tests', () => {
  test('component should render', () => {
    render(<SectionTitle title={titles.technos.title} description={titles.technos.description} />);
  });
});
