import { useState } from 'react';

import * as S from './styled';

export function StarIcon() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <S.StarIconWrapper>
      <S.StarIcon onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave} />
      <S.Tooltip className={isHovered ? 'show' : 'hide'}>현재 개발 커리어에서 사용 중</S.Tooltip>
    </S.StarIconWrapper>
  );
}
