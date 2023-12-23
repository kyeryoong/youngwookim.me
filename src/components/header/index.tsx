'use client';
import Logo from './logo';
import MenuBar from './menuBar';
import MenuButton from './menuButton';
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
