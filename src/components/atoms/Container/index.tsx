import styled, { css } from 'styled-components';

import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 2rem;

    ${media.greaterThan('large')`
      margin: 0 3.2rem;
    `}

    ${media.greaterThan('huge')`
      margin-left: auto;
      margin-right: auto;
    `}
  `}
`;
