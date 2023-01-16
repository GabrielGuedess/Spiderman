import Link from 'next/link';

import { Container } from 'components/atoms/Container';

import styled, { css } from 'styled-components';

import media from 'styled-media-query';

export const Wrapper = styled(Container)`
  padding-top: 1.6rem;
`;

export const WrapperLogo = styled.div``;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const NavList = styled.ul`
  display: none;

  ${media.greaterThan('large')`
    display: flex;
    gap: 2.4rem;
  `}
`;

export const NavItem = styled.li`
  ${({ theme }) => css`
    list-style: none;

    :last-child a {
      color: ${theme.colors.redLight};
      font-style: italic;
    }
  `}
`;

export const NavLink = styled(Link)`
  ${({ theme }) => css`
    position: relative;
    text-decoration: none;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #959698;
    font-weight: 200;
    padding: 0.8rem 1.6rem;
    letter-spacing: 2px;
    transition: 0.7s ease;

    ::after {
      content: '';
      position: absolute;
      left: 50%;
      top: -100%;
      width: 2px;
      height: 0px;
      border-radius: 2px;
      background: linear-gradient(
        0deg,
        ${theme.colors.red} 0%,
        rgba(0, 0, 0, 0) 100%
      );
      transition: 0.7s ease;
    }

    :hover {
      color: ${theme.colors.white};

      ::after {
        height: 40px;
      }
    }
  `}
`;

export const NavSocial = styled.div`
  ${({ theme }) => css`
    display: none;

    svg {
      cursor: pointer;
      transition: 0.7s ease;

      :hover {
        color: ${theme.colors.redLight};
        transform: translateY(-3px);
      }
    }

    ${media.greaterThan('large')`
      display: flex;
      gap: 1.6rem;
    `}
  `}
`;
