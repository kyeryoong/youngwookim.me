import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import IconButton from '@/theme/IconButton';
import isMobile from '@/utils/isMobile';

import * as S from './styled';

type HeaderProps = {
  name: string;
};

const Header = ({ name }: HeaderProps) => {
  const theme = useTheme();
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const headerRef = useRef<HTMLHeadElement>(null);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.body.scrollHeight;
    const winHeight = document.documentElement.clientHeight;

    const scrollPercent =
      (scrollTop - winHeight + (headerRef.current?.clientHeight ?? 0)) /
      (docHeight - 2 * winHeight);
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(document.documentElement.scrollTop, document.body.scrollHeight);

  return (
    <>
      <S.HeaderWrapper show={scrollPercent > 0} ref={headerRef}>
        <S.BackButton href={'/projects'}>
          <IconButton type={'left'} size={isMobile() ? 36 : 24} color={theme.color.gray[500]} />
        </S.BackButton>
        {name}
      </S.HeaderWrapper>
    </>
  );
};

export default Header;
