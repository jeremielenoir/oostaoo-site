import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ContactForm from './ContactForm';

describe('ContactForm component tests', () => {
  test('correct data added should trigger a successfull submit', async () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('formSubmitButton')).not.toBeEnabled();

    fireEvent.change(getByTestId('usernameField').querySelector('input'), { target: { value: 'John Doe' } });
    fireEvent.change(getByTestId('emailField').querySelector('input'), { target: { value: 'John@Doe.com' } });
    fireEvent.change(getByTestId('messageField').querySelector('textarea'), { target: { value: 'John Doe' } });

    expect(getByTestId('formSubmitButton')).toBeEnabled();

    fireEvent.click(getByTestId('formSubmitButton'));
    await waitFor(() => expect(getByTestId('successMessage')).toBeInTheDocument());
  });

  test('incorrect data added should trigger a successfull submit', async () => {
    const { getByTestId } = render(<ContactForm />);
    expect(getByTestId('formSubmitButton')).not.toBeEnabled();

    fireEvent.change(getByTestId('usernameField').querySelector('input'), { target: { value: 'incorrectdata' } });
    fireEvent.change(getByTestId('emailField').querySelector('input'), { target: { value: 'incorrect dataJohnDoe.com' } });
    fireEvent.change(getByTestId('messageField').querySelector('textarea'), { target: { value: '' } });

    expect(getByTestId('formSubmitButton')).not.toBeEnabled();

    fireEvent.submit(getByTestId('form'));

    await waitFor(() => expect(getByTestId('errorMessage')).toBeInTheDocument());
  });

  test('focusing name input should trigger on click', () => {
    const { getByText, getByTestId } = render(<ContactForm />);
    const inputComponent = getByTestId('usernameField');

    fireEvent.focus(inputComponent.querySelector('input'));
    const text = getByText('max 40 char.');
    expect(text).toBeInTheDocument();
  });

  test('focusing email input should trigger on click', () => {
    const { getByText, getByTestId } = render(<ContactForm />);
    const inputComponent = getByTestId('emailField');

    fireEvent.focus(inputComponent.querySelector('input'));
    const text = getByText('exemple@mail.fr');
    expect(text).toBeInTheDocument();
  });

  test('focusing email input should trigger on click', () => {
    const { getByText, getByTestId } = render(<ContactForm />);
    const inputComponent = getByTestId('messageField');

    fireEvent.focus(inputComponent.querySelector('textarea'));
    const text = getByText('max 250 mots');
    expect(text).toBeInTheDocument();
  });
});
