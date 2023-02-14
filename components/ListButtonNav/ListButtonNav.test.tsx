import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListButtonNav } from './ListButtonNav';

const mockFunction = jest.fn();

beforeEach(() => render(
  <ListButtonNav
    handleClick={mockFunction}
    displayFull="accueil"
    section="accueil"
    btnIndex={0}
    lastElementIndex={6}
  />,
));

describe('ListButtonNav text', () => {
  test('should display the text : "accueil"', () => {
    const linkText = screen.getByText('accueil');
    expect(linkText).toBeInTheDocument();
  });
});
