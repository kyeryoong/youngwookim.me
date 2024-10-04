'use client';

import { observer } from 'mobx-react-lite';

import store from '@/stores/menuStore';

import * as S from './styled';

type MeunElementProps = {
  target: string;
};

const MenuElement = observer(({ target }: MeunElementProps) => {
  const handleMenuClick = () => {
    store.setIsMenuOpened(false);
  };

  const capitalize = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <S.MenuElementWrapper>
      <S.MenuElementCursor />
      <S.MenuElementText onClick={handleMenuClick} href={`/${target}`}>
        {target !== '' ? capitalize(target) : 'Home'}
      </S.MenuElementText>
    </S.MenuElementWrapper>
  );
});

export default MenuElement;
