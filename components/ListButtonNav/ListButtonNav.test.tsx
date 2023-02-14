import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListButtonNav } from './ListButtonNav';

const mockHandleClick = jest.fn();

beforeEach(() => {
  render(
    <ListButtonNav
      handleClick={mockHandleClick}
      displayFull="accueil"
      section="accueil"
      btnIndex={0}
      lastElementIndex={6}
    />,
  );
});

describe('ListButtonNav text', () => {
  test('should display the text : "accueil"', () => {
    const linkText = screen.getByText('accueil');
    expect(linkText).toBeInTheDocument();
  });

  test('should call handleClick function on click', () => {
    const linkText = screen.getByText('accueil');
    fireEvent.click(linkText);
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
