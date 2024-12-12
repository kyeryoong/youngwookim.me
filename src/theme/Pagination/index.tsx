import { useCallback } from 'react';

import * as S from './styled';

type PaginationProps = {
  size?: number;
  currentIndex: number;
  totalIndex: number;
  onClick?: (index: number) => void;
};

const Pagination = ({ size = 12, currentIndex, totalIndex, onClick }: PaginationProps) => {
  const handleDotClick = useCallback((index: number) => {
    if (onClick) {
      onClick(index);
    }
  }, []);

  return (
    <S.PaginationWrapper size={size}>
      {Array.from({ length: totalIndex }, (_, i) => i).map((index) => (
        <S.DotButton key={index} size={size} onClick={() => handleDotClick(index)}>
          <S.Dot size={size} isSelcted={index === currentIndex} />
        </S.DotButton>
      ))}
    </S.PaginationWrapper>
  );
};

export default Pagination;
