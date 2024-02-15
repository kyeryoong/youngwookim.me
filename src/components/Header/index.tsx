'use client';

import Logo from './Logo';
import MenuButton from './MenuButton';
import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logo />
      <MenuButton />
    </S.HeaderWrapper>
  );
};

export default Header;
