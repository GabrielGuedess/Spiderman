import { renderWithTheme } from 'utils/tests/helpers';

import { Container } from '.';

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Container />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
