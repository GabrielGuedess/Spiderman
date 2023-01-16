import Link from 'next/link';

import styled, { css } from 'styled-components';

import { ButtonProps } from '.';

const modifiersButton = {
  primary: () => css`
    background: linear-gradient(267.72deg, #f02a2f 0.88%, #ea1d22 100%);
    padding: 1.2rem 3.2rem;

    ::before,
    ::after {
      content: '';
      position: absolute;
      display: block;
      border-radius: 3px;
      opacity: 0;
      width: 20%;
      height: 70%;
      z-index: -1;
      transition: 0.7s ease;
    }

    ::before {
      bottom: -2px;
      right: -2px;
      border-bottom: 3px solid #edf1f7;
      border-right: 3px solid #edf1f7;
    }

    ::after {
      top: -2px;
      left: -2px;
      border-top: 3px solid #edf1f7;
      border-left: 3px solid #edf1f7;
    }

    :hover {
      ::after,
      ::before {
        opacity: 1;
        width: 20%;
      }
    }
  `,
  secondary: () => css`
    border: 2px solid #ea1d22;
    padding: 1rem 3.2rem;

    ::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      z-index: -1;
      background: linear-gradient(267.72deg, #f02a2f 0.88%, #ea1d22 100%);
      transition: 0.7s ease;
    }

    :hover {
      ::after {
        width: 100%;
      }
    }
  `,
};

export const Wrapper = styled(Link)<Pick<ButtonProps, 'type'>>`
  ${({ theme, type }) => css`
    position: relative;
    border-radius: 3px;
    text-transform: uppercase;
    transform: skewX(-10deg);
    transition: 0.7s ease;
    text-decoration: none;
    font-size: 1.4rem;
    color: ${theme.colors.white};

    :hover {
      box-shadow: 0px 14px 85px rgba(240, 42, 47, 0.06),
        0px 5.11023px 31.0264px rgba(240, 42, 47, 0.0413989),
        0px 2.48092px 15.0627px rgba(240, 42, 47, 0.0333774),
        0px 1.21619px 7.38404px rgba(240, 42, 47, 0.0266226),
        0px 0.480885px 2.91966px rgba(240, 42, 47, 0.0186011);

      transform: scale(1.05) skewX(-10deg);
    }

    ${modifiersButton[type!]}
  `}
`;
