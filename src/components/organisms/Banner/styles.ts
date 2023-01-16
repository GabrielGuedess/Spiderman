import { Container } from 'components/atoms/Container';

import styled from 'styled-components';

import media from 'styled-media-query';

export const Wrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  overflow-x: hidden;

  ${media.greaterThan('large')`
    flex-direction: row;
  `}
`;

export const BackgroundVideo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      #0b0c10 24.48%,
      rgba(11, 12, 16, 0.8) 54.09%,
      #0c0c10 77.6%
    );
  }
`;

export const WrapperInfo = styled.div`
  max-width: 57.6rem;
`;

export const WrapperImageTitle = styled.div`
  position: relative;
  width: 57rem;
  height: 21.4rem;
`;

export const Description = styled.div`
  font-size: 1.4rem;
  color: #959698;
  letter-spacing: 1px;
  line-height: 140%;
  margin: 1.6rem 0;
`;

export const WrapperButtons = styled.div`
  position: absolute;
  left: 0.8rem;
  display: flex;
  gap: 1.6rem;
`;

export const WrapperBrands = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7.9rem;
  gap: 1.6rem;
`;

export const WrapperImage = styled.div`
  width: 100%;
  height: 75.7rem;

  ${media.greaterThan('large')`
    width: auto;
    flex: 1;
  `}
`;

export const ImageSpider = styled.div`
  position: relative;
  width: 120%;
  height: 90%;
  transform: translateX(-22rem);
`;
