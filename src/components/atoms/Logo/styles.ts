import styled from 'styled-components';

import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 4.332rem;
  height: 6.4rem;
  color: #edf1f7;

  ${media.greaterThan('large')`
    width: 9.6rem;
    height: 9.6rem;
  `}
`;
