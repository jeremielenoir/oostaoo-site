import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobOffers from './JobOffers';
import JobOffer from './JobOffer';
import jobs from '../../assets/jobData';

import { getStaticProps } from '../../pages/index';

jest.mock('./JobOffer');

describe('JobOffers Component', () => {
  test('Should map jobs array data', async () => {
    const response = await getStaticProps();
    const title = response.props.allTitles.emplois;

    render(<JobOffers title={title} />);
    expect(JobOffer).toHaveBeenCalledTimes(jobs.length);
  });
});
