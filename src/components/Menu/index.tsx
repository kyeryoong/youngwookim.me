'use client';
import * as S from './styled';
import store from '@/stores/store';
import { observer } from 'mobx-react';
import MenuButton from './MenuButton';
import Prompt from './Prompt';

const Menu = observer(() => {
  const handleBackgroundClick = () => {
    store.setIsMenuOpen(false);
  };

  const handleMenuWrapperclick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <S.MenuBackground
      className={store.isMenuOpen ? 'opened' : 'closed'}
      onClick={handleBackgroundClick}
    >
      <S.MenuWrapper
        className={store.isMenuOpen ? 'opened' : 'closed'}
        onClick={handleMenuWrapperclick}
      >
        <S.MenuTop>
          <S.MenuTopButton.Red />
          <S.MenuTopButton.Yellow />
          <S.MenuTopButton.Blue />
        </S.MenuTop>
        <S.MenuBottom>
          <MenuButton target="" />
          <MenuButton target="profile" />
          <MenuButton target="tech" />
          <Prompt />
        </S.MenuBottom>
      </S.MenuWrapper>
    </S.MenuBackground>
  );
});

export default Menu;
