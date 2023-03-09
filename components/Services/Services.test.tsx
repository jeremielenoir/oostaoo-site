import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Services from './Services';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

import { getStaticProps } from '../../pages/index';

jest.mock('../SectionTitle/SectionTitle');
jest.mock('../ServiceContainer/ServiceContainer');

describe('Services Component', () => {
  beforeEach(async () => {
    const response = await getStaticProps();
    const servicesData = response.props.servicesArray;
    const servicesTitle = response.props.allTitles.services;
    render(<Services servicesArray={servicesData} title={servicesTitle} />);
  });
  afterEach(() => jest.clearAllMocks());

  test('Should display a SectionTitle sub-component', async () => {
    expect(SectionTitle).toHaveBeenCalledTimes(1);
  });

  test('Should display ServiceContainer sub-component', async () => {
    const response = await getStaticProps();
    const servicesData = response.props.servicesArray;
    expect(ServiceContainer).toHaveBeenCalledTimes(servicesData.length);
  });
});
