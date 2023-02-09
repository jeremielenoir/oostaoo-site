import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import JobOffer from './JobOffer';

const mockJob = {
  id: 2,
  title: 'Développeur Front',
  status: 'disponible',
  place: 'Paris',
  sector: 'Immobilier',
  publishDate: Date.now(),
  startDate: Date.now(),
  weeklyWorkTime: '35h',
  details:
    'ed rutrum eros est, eu auctor lacus finibus id. Praesent leo lorem, commodo non ex vel, gravida scelerisque dolor. Nunc a enim dignissim, tincidunt magna eget, euismod ligula. Sed tellus lectus, mollis et malesuada ac, vehicula in orci. Proin ex mauris, pharetra quis malesuada in, congue non tellus. Nam et velit vel diam ultrices commodo. Nam accumsan ultricies varius. Mauris venenatis ac sem vitae commodo. Integer tempus ipsum sed sem pharetra, sed vehicula lacus maximus. Fusce ultricies ornare tellus, at feugiat nulla sagittis id. Proin scelerisque quam non lacus auctor scelerisque. Nulla facilisi. Pellentesque ut est purus.',
  image: 'https://www.w3bai.com/w3css/img_fjords.jpg',
  linkedin: 'https://fr.linkedin.com/',
  visibility: true,
};

describe('JobOffer Component', () => {
  beforeEach(() => render(<JobOffer job={mockJob} />));

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
