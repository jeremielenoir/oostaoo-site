import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SectionTitle from './SectionTitle';

import { getStaticProps } from '../../pages/index';

describe('SectionTitle component tests', () => {
  test('component should have the proper title and desciption', async () => {
    const response = await getStaticProps();
    const title = response.props.allTitles.technos;

    render(
      <SectionTitle title={title.title} description={title.description} />,
    );

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      title.title,
    );

    expect(screen.getByText(title.description)).toBeInTheDocument();
  });
});
