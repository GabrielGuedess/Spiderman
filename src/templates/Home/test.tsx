import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { Home } from '.';

jest.mock('components/organisms/Banner', () => ({
  __esModule: true,
  Banner: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Banner">{children}</div>;
  },
}));

jest.mock('components/organisms/Header', () => ({
  __esModule: true,
  Header: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Header">{children}</div>;
  },
}));

describe('<Home />', () => {
  it('should render the home', () => {
    const { container } = renderWithTheme(<Home />);

    expect(screen.getByTestId('Banner')).toBeInTheDocument();
    expect(screen.getByTestId('Header')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
