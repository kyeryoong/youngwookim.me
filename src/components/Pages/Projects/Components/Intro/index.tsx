import { ReactNode, useEffect, useState } from 'react';

import * as S from './styled';

type IntroProps = {
  children?: ReactNode;
  mouseScrollColor?: string;
};

const Intro = ({ children, mouseScrollColor = 'white' }: IntroProps) => {
  const [showMouseScroll, setShowMouseScroll] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowMouseScroll(false);
      } else {
        setShowMouseScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.IntroWrapper>
      {children}
      <S.MouseScrollDownWrapper
        showMouseScroll={showMouseScroll}
        mouseScrollColor={mouseScrollColor}
      >
        <S.MouseScrollIcon />
        <S.ArrowDownIcon />
      </S.MouseScrollDownWrapper>
    </S.IntroWrapper>
  );
};

export default Intro;
