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
    store.setIsMenuExpanded(false);
  };

  const handleMenuWrapperclick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCloseButtonClick = () => {
    store.setIsMenuOpened(false);
    store.setIsMenuExpanded(false);
  };

  const handleExpandButtonClick = () => {
    store.setIsMenuExpanded(!store.isMenuExpanded);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        event.preventDefault();
        store.setIsMenuOpened(false);
        store.setIsMenuExpanded(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <S.MenuBackground
      isMenuOpened={store.isMenuOpened}
      isMenuExpanded={store.isMenuExpanded}
      onClick={handleBackgroundClick}
    >
      <S.MenuWrapper
        isMenuOpened={store.isMenuOpened}
        isMenuExpanded={store.isMenuExpanded}
        onClick={handleMenuWrapperclick}
      >
        <S.MenuTop isMenuExpanded={store.isMenuExpanded}>
          <S.MenuTopButton.Red onClick={handleCloseButtonClick} />
          <S.MenuTopButton.Yellow />
          <S.MenuTopButton.Green onClick={handleExpandButtonClick} />
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
