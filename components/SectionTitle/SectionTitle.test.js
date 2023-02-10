import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SectionTitle from './SectionTitle';

import titles from '../../assets/Titles';

describe('SectionTitle component tests', () => {
  test('component should render', () => {
    render(<SectionTitle title={titles.technos.title} description={titles.technos.description} />);
  });
  test('component should have the proper title and desciption', () => {
    render(<SectionTitle title={titles.technos.title} description={titles.technos.description} />);

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(titles.technos.title);

    expect(screen.getByText(titles.technos.description)).toBeInTheDocument();
  });
});
