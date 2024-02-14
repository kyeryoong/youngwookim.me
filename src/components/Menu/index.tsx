'use client';
import * as S from './styled';
import store from '@/stores/store';
import { observer } from 'mobx-react';
import MenuButton from './MenuButton';
import Prompt from './Prompt';
import { useEffect } from 'react';

const Menu = observer(() => {
  const handleBackgroundClick = () => {
    store.setIsMenuOpened(false);
  };

  const handleMenuWrapperclick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        event.preventDefault();
        store.setIsMenuOpened(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <S.MenuBackground
      className={store.isMenuOpened ? 'opened' : 'closed'}
      onClick={handleBackgroundClick}
    >
      <S.MenuWrapper
        className={store.isMenuOpened ? 'opened' : 'closed'}
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
