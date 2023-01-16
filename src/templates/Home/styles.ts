import styled, { css, keyframes } from 'styled-components';

const logo = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    fill: transparent;
  }
  25% {
    stroke-width: 1;
    stroke-dasharray: 100 0;
    fill: transparent;
  }
  60%, 100% {
    stroke-width: 0.3;
    fill: #E5E9EF;
  }
`;

export const Wrapper = styled.div``;

export const BackgroundLoad = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(
      225deg,
      ${theme.colors.red} 0%,
      ${theme.colors.redDark} 100%
    );
  `}

  svg g path {
    fill: transparent;
    animation: ${logo} 12s ease infinite alternate;
  }
`;
