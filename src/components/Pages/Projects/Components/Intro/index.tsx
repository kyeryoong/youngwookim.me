import { ReactNode } from 'react';

import * as S from './styled';

type IntroProps = {
  color: string;
  imgSrc: string;
  children?: ReactNode;
};

const Intro = ({ color, imgSrc, children }: IntroProps) => {
  return (
    <S.IntroWrapper>
      <S.IntroLeftWrapper>{children}</S.IntroLeftWrapper>
      <S.IntroRightWrapper color={color}>
        <S.IntroGraphic width={0} height={0} sizes={'100%'} src={imgSrc} alt={'image'} />
      </S.IntroRightWrapper>
    </S.IntroWrapper>
  );
};

export default Intro;
