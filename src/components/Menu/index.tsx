'use client';

import { observer } from 'mobx-react';
import { useEffect, useRef } from 'react';

import store from '@/stores/store';

import MenuButton from './MenuElement';
import Prompt from './Prompt';
import * as S from './styled';

const Menu = observer(() => {
  const ref = useRef<HTMLInputElement>(null);

  const handleBackgroundClick = () => {
    store.setIsMenuOpened(false);
  };

  const handleMenuWrapperclick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCloseButtonClick = () => {
    store.setIsMenuOpened(false);
  };

  const handleExpandButtonClick = () => {
    store.setIsMenuExpanded(!store.isMenuExpanded);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        event.preventDefault();
        store.setIsMenuOpened(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [store.promptEntered]);

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
        <S.MenuBottom ref={ref}>
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
