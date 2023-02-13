import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ServiceContainer from './ServiceContainer';

import services from '../../assets/Services';

// const mockService = services[0];

describe('ServiceContainer component tests', () => {
  test('component should render', () => {
    render(<ServiceContainer
      icon={services.at(0).icon}
      title={services.at(0).title}
      description={services.at(0).description}
    />);
  });

  // Here there is a problem with how many node is render in the component
  // Need to be worked on

  // test('Clicking the component should fire a function', async () => {
  //   const component = render(<ServiceContainer
  //     icon={mockService.icon}
  //     title={mockService.title}
  //     description={mockService.description}
  //   />);

  //   console.log(component);

  //   // fireEvent.click(component.getByTestId('service'));

  //   // expect(ServiceContainer.handleClick).toHaveBeenCalledTimes(1);
  // });
});
