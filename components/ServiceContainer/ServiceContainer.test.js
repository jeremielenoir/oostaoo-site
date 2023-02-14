import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import ServiceContainer from './ServiceContainer';

describe('ServiceContainer component tests', () => {
  test('component should render', () => {
    render(<ServiceContainer />);
  });

  test('Clicking the component should make the sercice descriptio appear or disappear', () => {
    const { getByTestId, getByText } = render(<ServiceContainer
      icon="lead"
      title="test title"
      description="test description"
    />);

    fireEvent.click(getByTestId('service'));
    expect(getByText('test description')).toHaveClass('displayText');

    fireEvent.click(getByTestId('service'));
    expect(getByText('test description')).toHaveClass('null');
  });

  test('component should show Assessment pictogram for leqd icon', () => {
    const { getByTestId } = render(<ServiceContainer icon="lead" />);
    expect(getByTestId('assessment')).toBeInTheDocument();
  });

  test('component should show Hqndy;qn pictogram for full icon', () => {
    const { getByTestId } = render(<ServiceContainer icon="full" />);
    expect(getByTestId('handyman')).toBeInTheDocument();
  });

  test('component should show QssignementInd pictogram for front icon', () => {
    const { getByTestId } = render(<ServiceContainer icon="front" />);
    expect(getByTestId('assignementInd')).toBeInTheDocument();
  });
});
