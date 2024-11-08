import { useCallback, useEffect, useState } from 'react';

import * as S from './styled';

type ButtonProps = {
  name: string;
  onClick: () => void;
};

type NavigatorProps = {
  focusedIndex: number;
  buttons?: ButtonProps[];
};

const Navigator = ({ focusedIndex, buttons }: NavigatorProps) => {
  const [positionY, setPositionY] = useState<number>(0);

  const getIcon = useCallback(
    (name: string, index: number) => {
      switch (name) {
        case '개요':
          return <S.OverviewIcon isFocused={index === focusedIndex} />;
        case '성과':
          return <S.AchievementIcon isFocused={index === focusedIndex} />;
        case '개발 인원':
          return <S.TeamMembersIcon isFocused={index === focusedIndex} />;
        case '구조':
          return <S.ArchitectureIcon isFocused={index === focusedIndex} />;
        case '소스 코드':
          return <S.SourceCodeIcon isFocused={index === focusedIndex} />;
        case '기술 스택':
          return <S.TechIcon isFocused={index === focusedIndex} />;
        case '스크린샷':
          return <S.ScreenshotIcon isFocused={index === focusedIndex} />;
        case '영상':
          return <S.VideoIcon isFocused={index === focusedIndex} />;
      }
    },
    [focusedIndex],
  );

  useEffect(() => {
    const handleScroll = () => {
      setPositionY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.NavigatorWrapper
      top={positionY > window.innerHeight ? '150px' : `calc(100dvh - ${positionY}px + 150px)`}
    >
      {buttons?.map((button, index) => (
        <S.NavigatorButton key={index} onClick={button.onClick} isFocused={index === focusedIndex}>
          {getIcon(button.name, index)}
          {button.name}
        </S.NavigatorButton>
      ))}
    </S.NavigatorWrapper>
  );
};

export default Navigator;
