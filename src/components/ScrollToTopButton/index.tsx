import { useEffect, useState } from 'react';

import * as S from './styled';

type ScrollToTopButtonProps = {
  show?: boolean;
  onClick?: () => void;
  height?: number;
};

export const ScrollToTopButton = ({ show, onClick, height = 100 }: ScrollToTopButtonProps) => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setShowButton(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > height) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <S.ScrollToTopButtonWrapper $show={show ?? showButton} onClick={onClick ?? scrollToTop}>
      <S.ArrowUpIcon />
    </S.ScrollToTopButtonWrapper>
  );
};
