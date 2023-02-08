import React from 'react';
import { render } from '@testing-library/react';
import Intro from './Intro';
import introElements from '../../assets/Intro';

test('Intro component displays intro elements correctly', () => {
  const { getByText } = render(<Intro />);

  introElements.forEach((element) => {
    const numberElement = getByText(element.number);
    expect(numberElement).toBeInTheDocument();

    const titleElement = getByText(
      element.title[0].toUpperCase() + element.title.slice(1).toLowerCase(),
    );
    expect(titleElement).toBeInTheDocument();

    const textElement = getByText(element.text);
    expect(textElement).toBeInTheDocument();
  });
});
