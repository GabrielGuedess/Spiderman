import { useRef } from 'react';

import { Logo } from 'components/atoms/Logo';
import { Banner } from 'components/organisms/Banner';
import {
  BackgroundVideo,
  WrapperImageTitle,
  Description,
  WrapperButtons,
  WrapperBrands,
  WrapperImage,
} from 'components/organisms/Banner/styles';
import { Header } from 'components/organisms/Header';
import {
  WrapperLogo,
  NavList,
  NavSocial,
} from 'components/organisms/Header/styles';

import { gsap, Expo } from 'gsap';
import { useIsomorphicLayoutEffect } from 'utils/useIsomorphicLayoutEffect';

import * as S from './styles';

export const Home = () => {
  const home = useRef<HTMLDivElement | null>(null);
  const backgroundLoad = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.config({
      nullTargetWarn: false,
    });

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          backgroundLoad.current,
          { width: '100%' },
          {
            width: '0%',
            ease: Expo.easeInOut,
            delay: 5,
            duration: 1,
          },
        )
        .fromTo(
          BackgroundVideo.toString(),
          { width: '0%', opacity: 0 },
          {
            width: '100%',
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 2,
          },
          '-=1',
        )
        .fromTo(
          WrapperLogo.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        )
        .fromTo(
          NavList.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        )
        .fromTo(
          NavSocial.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        )
        .fromTo(
          WrapperImageTitle.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        )
        .fromTo(
          Description.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        )
        .fromTo(
          WrapperButtons.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        )
        .fromTo(
          WrapperBrands.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        )

        .fromTo(
          WrapperImage.toString(),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
          },
          '-=0.5',
        );
    }, home);

    return () => ctx.revert();
  }, []);

  return (
    <S.Wrapper ref={home}>
      <S.BackgroundLoad ref={backgroundLoad}>
        <Logo />
      </S.BackgroundLoad>

      <Header />
      <Banner />
    </S.Wrapper>
  );
};
