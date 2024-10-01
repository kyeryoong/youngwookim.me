import { useEffect, useState } from 'react';

import * as S from './styled';

type ScrollToTopButtonProps = {
  show?: boolean;
  onClick?: () => void;
  height?: number;
};

export const ScrollToTopButton = ({ show, onClick, height = 100 }: ScrollToTopButtonProps) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [showButtonDefault, setShowButtonDefault] = useState(false);

  const updateScrollY = () => {
    setScrollY(window.pageYOffset);

    if (scrollY > height) {
      setShowButtonDefault(true);
    } else {
      setShowButtonDefault(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setScrollY(0);

    setShowButtonDefault(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollY);

    return () => {
      window.removeEventListener('scroll', updateScrollY);
    };
  });

  return (
    <S.ScrollToTopButtonWrapper $show={show ?? showButtonDefault} onClick={onClick ?? scrollToTop}>
      <S.ArrowUpIcon />
    </S.ScrollToTopButtonWrapper>
  );
};
