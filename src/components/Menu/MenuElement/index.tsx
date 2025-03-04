'use client';

import { observer } from 'mobx-react-lite';

import useStore from '@/stores';

import * as S from './styled';

type MeunElementProps = {
  target: string;
};

const MenuElement = observer(({ target }: MeunElementProps) => {
  const { menuStore } = useStore();

  const handleMenuClick = () => {
    menuStore.setIsMenuOpened(false);
  };

  const capitalize = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <S.MenuElementWrapper onClick={handleMenuClick} href={`/${target}`} scroll={false}>
      <S.MenuElementCursor />
      {target !== '' ? capitalize(target) : 'Home'}
    </S.MenuElementWrapper>
  );
});

export default MenuElement;
