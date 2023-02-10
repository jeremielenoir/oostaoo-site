import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobOffers from './JobOffers';
import JobOffer from './JobOffer';
import jobs from '../../assets/jobData';

jest.mock('./JobOffer');

describe('JobOffers Component', () => {
  test('Should map jobs array data', () => {
    render(<JobOffers />);
    expect(JobOffer).toHaveBeenCalledTimes(jobs.length);
  });
});
