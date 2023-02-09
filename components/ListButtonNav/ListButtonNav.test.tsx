import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListButtonNav } from './ListButtonNav';

const mockFunction = jest.fn();

describe('ListButtonNav component tests', () => {
  beforeEach(() => {
    render(
      <ListButtonNav
        handleClick={mockFunction}
        displayFull="accueil"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );
  });

  test('renders correctly', () => {
    render(
      <ListButtonNav
        handleClick={mockFunction}
        displayFull="accueil"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );
  });

  test('Button should have a name based on the section prop', () => {
    const testBtn = screen.getByRole('button', { name: 'accueil' });
    expect(testBtn).toBeInTheDocument();
  });
});

describe('ListButtonNav Link tests', () => {
  test('Button should be nested in a link to a section', () => {
    const { container } = render(
      <ListButtonNav
        handleClick={mockFunction}
        displayFull="accueil"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );
    const testLink = container.querySelector('a');
    expect(testLink).toBeInTheDocument();
  });

  test('Button should be active when on the right section', () => {
    render(
      <ListButtonNav
        handleClick={mockFunction}
        displayFull="accueil"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );

    const testBtn = screen.getByRole('button', { name: 'accueil' });
    const testClass = testBtn.getAttribute('class');
    expect(testClass).toMatch(/MuiButton-containedPrimary/gi);
  });
});
