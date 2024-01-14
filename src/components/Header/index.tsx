'use client';
import Logo from './Logo';
import MenuBar from './MenuBar';
import MenuButton from './MenuButton';
import * as S from './styled';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <Logo />
      <MenuButton />
      <MenuBar />
    </S.HeaderWrapper>
  );
}
