import Image from 'next/image';

import Tilt from 'react-parallax-tilt';

import { Button } from 'components/atoms/Button';

import { Playstation } from '@styled-icons/bootstrap';

import * as S from './styles';

export const Banner = () => (
  <>
    <S.BackgroundVideo>
      <video autoPlay muted loop>
        <source src="/video/spiderman.mp4" />
      </video>
    </S.BackgroundVideo>
    <S.Wrapper>
      <S.WrapperInfo>
        <S.WrapperImageTitle>
          <Image
            fill
            sizes="57rem"
            src="/img/spiderman-text.png"
            alt="Image title spider-man"
          />
        </S.WrapperImageTitle>

        <S.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis velit
          magna vitae mauris orci fames posuere nibh. Sit tellus amet facilisi
          sit odio pulvinar scelerisque quam et. Ultrices facilisis nunc massa
          diam, quis mi imperdiet.
        </S.Description>

        <S.WrapperButtons>
          <Button title="Pre-order now" href="/" />
          <Button type="secondary" title="Watch the teaser" href="/" />
        </S.WrapperButtons>

        <S.WrapperBrands>
          <Playstation size={36} color="#FFFFFF" />
          <Image
            src="/svg/marvel.svg"
            alt="Logo marvel"
            width={58}
            height={24}
          />
        </S.WrapperBrands>
      </S.WrapperInfo>

      <S.WrapperImage>
        <S.ImageSpider>
          <Tilt
            perspective={4000}
            scale={1.05}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          >
            <Image
              fill
              quality={100}
              sizes="103.7rem"
              src="/img/spiderman.png"
              alt="Image spider-man"
              style={{ objectFit: 'contain', zIndex: 10 }}
            />
          </Tilt>
        </S.ImageSpider>
      </S.WrapperImage>
    </S.Wrapper>
  </>
);
