import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListButtonNav } from './ListButtonNav';

const mockHandleClick = jest.fn();
const mockButtonComponent = jest.fn();

jest.mock('@mui/material/Button', () => ({
  __esModule: true,
  default: ({ variant }: { variant?: string }) => mockButtonComponent({ variant }),
}));

afterEach(() => jest.resetAllMocks());

describe('ListButtonNav Button', () => {
  test('should have a prop variant equal to "contained"', () => {
    render(
      <ListButtonNav
        handleClick={mockHandleClick}
        displayFull="accueil"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );

    expect(mockButtonComponent).toHaveBeenCalledTimes(1);
    expect(mockButtonComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        variant: 'contained',
      }),
    );
  });

  test('should have a prop variant equal to "undefined"', () => {
    render(
      <ListButtonNav
        handleClick={mockHandleClick}
        displayFull="services"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );

    expect(mockButtonComponent).toHaveBeenCalledTimes(1);
    expect(mockButtonComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        variant: undefined,
      }),
    );
  });
});
