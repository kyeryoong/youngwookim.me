'use client';

import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';

import { useStore } from '@/stores';

import MenuButton from './MenuElement';
import Prompt from './Prompt';
import * as S from './styled';

const Menu = observer(() => {
  const { menuStore } = useStore();

  const ref = useRef<HTMLInputElement>(null);

  const handleBackgroundClick = () => {
    menuStore.setIsMenuOpened(false);
  };

  const handleMenuWrapperclick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCloseButtonClick = () => {
    menuStore.setIsMenuOpened(false);
  };

  const handleExpandButtonClick = () => {
    menuStore.setIsMenuExpanded(!menuStore.isMenuExpanded);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        event.preventDefault();
        menuStore.setIsMenuOpened(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [menuStore.promptEntered]);

  return (
    <S.MenuBackground
      $isMenuOpened={menuStore.isMenuOpened}
      $isMenuExpanded={menuStore.isMenuExpanded}
      onClick={handleBackgroundClick}
    >
      <S.MenuWrapper
        $isMenuOpened={menuStore.isMenuOpened}
        $isMenuExpanded={menuStore.isMenuExpanded}
        onClick={handleMenuWrapperclick}
      >
        <S.MenuTop $isMenuExpanded={menuStore.isMenuExpanded}>
          <S.MenuTopButton.Red onClick={handleCloseButtonClick} />
          <S.MenuTopButton.Yellow />
          <S.MenuTopButton.Green onClick={handleExpandButtonClick} />
        </S.MenuTop>
        <S.MenuBottom ref={ref}>
          <MenuButton target="" />
          <MenuButton target="profile" />
          <MenuButton target="tech" />
          <MenuButton target="post" />
          {/* <MenuButton target="projects" /> */}
          <Prompt />
        </S.MenuBottom>
      </S.MenuWrapper>
    </S.MenuBackground>
  );
});

export default Menu;
