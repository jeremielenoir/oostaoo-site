import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Services from './Services';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceContainer from '../ServiceContainer/ServiceContainer';

jest.mock('../SectionTitle/SectionTitle');
jest.mock('../ServiceContainer/ServiceContainer');

describe('Services Component', () => {
  beforeEach(() => render(<Services />));
  afterEach(() => jest.clearAllMocks());

  test('Should display a SectionTitle sub-component', () => {
    expect(SectionTitle).toHaveBeenCalledTimes(1);
  });

  test('Should display ServiceContainer sub-component', () => {
    expect(ServiceContainer).toHaveBeenCalledTimes(3);
  });
});
