import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the button primary', () => {
    const { container } = renderWithTheme(
      <Button title="Button" href="/" type="primary" />,
    );

    expect(screen.getByRole('link', { name: /Button/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button secondary', () => {
    const { container } = renderWithTheme(
      <Button title="Button" href="/" type="secondary" />,
    );

    expect(screen.getByRole('link', { name: /Button/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
