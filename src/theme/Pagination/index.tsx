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
        <S.Dot
          key={index}
          size={size}
          isSelcted={index === currentIndex}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </S.PaginationWrapper>
  );
};

export default Pagination;
