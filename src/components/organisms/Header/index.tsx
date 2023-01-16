import { Logo } from 'components/atoms/Logo';

import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from '@styled-icons/boxicons-logos';

import * as S from './styles';

export const Header = () => (
  <S.Wrapper>
    <S.Nav>
      <S.NavMenu>
        <S.WrapperLogo>
          <Logo />
        </S.WrapperLogo>

        <S.NavList>
          <S.NavItem>
            <S.NavLink href="/1">Home</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/1">Story</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/1">Wallpapers</S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink href="/1">#BeYourself</S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.NavMenu>

      <S.NavSocial>
        <Facebook size={24} color="#959698" />
        <Instagram size={24} color="#959698" />
        <Youtube size={24} color="#959698" />
        <Twitter size={24} color="#959698" />
      </S.NavSocial>
    </S.Nav>
  </S.Wrapper>
);
