import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobOffer from './JobOffer';
import jobs from '../../assets/jobData';

const mockJob = jobs[2];

describe('JobOffer Component', () => {
  beforeEach(() => render(<JobOffer job={mockJob} />));
  afterEach(() => jest.restoreAllMocks());

  test('Should display a h3 title with the job title', () => {
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockJob.title);
  });

  test('Should display the job status', () => {
    const statusText = screen.getByText(mockJob.status);
    expect(statusText).toBeInTheDocument();
  });

  test('Should display the offer image with alt text', () => {
    const altText = screen.getByAltText(/job offer visual/i);
    expect(altText).toBeInTheDocument();
  });

  test('Should display a resume of the job details', () => {
    const jobDetailsResume = mockJob.details.substring(0, 250);
    const detailsText = screen.getByText(`${jobDetailsResume}...`);
    expect(detailsText).toBeInTheDocument();
  });

  test('Should display the link to linkedIn', () => {
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockJob.linkedin);
  });

  test('Should display the linkedIn logo image with a alt text', () => {
    const altText = screen.getByAltText(/LinkedIn link/i);
    expect(altText).toBeInTheDocument();
  });
});
