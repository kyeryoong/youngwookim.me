'use client';

import { observer } from 'mobx-react';

import store from '@/stores/store';

import * as S from './styled';

type MeunButtonProps = {
  target: string;
};

const MenuButton = observer(({ target }: MeunButtonProps) => {
  const handleMenuClick = () => {
    store.setIsMenuOpened(false);
  };

  const capitalize = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <S.MenuButton>
      <S.MenuButtonCursor />
      <S.MenuButtonText onClick={handleMenuClick} href={`/${target}`}>
        {target !== '' ? capitalize(target) : 'Home'}
      </S.MenuButtonText>
    </S.MenuButton>
  );
});

export default MenuButton;
