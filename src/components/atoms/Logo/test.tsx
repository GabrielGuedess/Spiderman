import { renderWithTheme } from 'utils/tests/helpers';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Logo />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
