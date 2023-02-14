import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ListButtonNav } from './ListButtonNav';

const mockFunction = jest.fn();
const mockButton = jest.fn();
jest.mock('@mui/material/Button', () => {
  function jestMockComponent(props: {
    variant: string | undefined;
    section: string;
  }) {
    mockButton(props);
    return <div />;
  }
  return jestMockComponent;
});

afterEach(() => jest.clearAllMocks());

describe('ListButtonNav variant prop', () => {
  test('should pass have a prop variant equal to "contained" to be active', () => {
    render(
      <ListButtonNav
        handleClick={mockFunction}
        displayFull="accueil"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );

    expect(mockButton).toHaveBeenCalledTimes(1);
    expect(mockButton).toHaveBeenCalledWith(
      expect.objectContaining({
        variant: 'contained',
      }),
    );
  });

  test('Button should have a prop variant equal to "undefined" when inactive', () => {
    render(
      <ListButtonNav
        handleClick={mockFunction}
        displayFull="services"
        section="accueil"
        btnIndex={0}
        lastElementIndex={6}
      />,
    );

    expect(mockButton).toHaveBeenCalledTimes(1);
    expect(mockButton).toHaveBeenCalledWith(
      expect.objectContaining({
        variant: undefined,
      }),
    );
  });
});
