import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContactForm from './ContactForm';

describe('ContactForm component tests', () => {
  test('component should render', () => {
    render(<ContactForm />);
  });
});
