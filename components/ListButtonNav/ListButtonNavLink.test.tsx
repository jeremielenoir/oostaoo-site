import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListButtonNav } from './ListButtonNav';

const mockHandleClick = jest.fn();
const mockLinkComponent = jest.fn();

jest.mock('react-scroll', () => ({
  Link: ({ offset }: {
    offset: number
  }) => mockLinkComponent({ offset }),
}));

afterEach(() => jest.resetAllMocks());

describe('ListButtonNav Link', () => {
  test('should have a prop offset equal to 50', () => {
    render(
      <ListButtonNav
        handleClick={mockHandleClick}
        displayFull="accueil"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );

    expect(mockLinkComponent).toHaveBeenCalledTimes(1);
    expect(mockLinkComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        offset: 50,
      }),
    );
  });

  test('should have a prop offset equal to -560', () => {
    render(
      <ListButtonNav
        handleClick={mockHandleClick}
        displayFull="acceuil"
        section="accueil"
        btnIndex={6}
        lastElementIndex={6}
      />,
    );

    expect(mockLinkComponent).toHaveBeenCalledTimes(1);
    expect(mockLinkComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        offset: -560,
      }),
    );
  });

  test('should have a prop offset equal to -200', () => {
    render(
      <ListButtonNav
        handleClick={mockHandleClick}
        displayFull="acceuil"
        section="accueil"
        btnIndex={2}
        lastElementIndex={6}
      />,
    );

    expect(mockLinkComponent).toHaveBeenCalledTimes(1);
    expect(mockLinkComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        offset: -200,
      }),
    );
  });
});
