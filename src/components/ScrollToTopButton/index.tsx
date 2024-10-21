import { useEffect, useState } from 'react';

import * as S from './styled';

type ScrollToTopButtonProps = {
  show?: boolean;
  onClick?: () => void;
  height?: number;
};

export const ScrollToTopButton = ({ show, onClick, height = 100 }: ScrollToTopButtonProps) => {
  const [showButton, setShowButton] = useState(false);

  const updateScrollY = () => {
    if (window.scrollY > height) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollY);

    return () => {
      window.removeEventListener('scroll', updateScrollY);
    };
  });

  return (
    <S.ScrollToTopButtonWrapper $show={show ?? showButton} onClick={onClick ?? scrollToTop}>
      <S.ArrowUpIcon />
    </S.ScrollToTopButtonWrapper>
  );
};
