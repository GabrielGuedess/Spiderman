import { renderWithTheme } from 'utils/tests/helpers';

import { Banner } from '.';

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Banner />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
