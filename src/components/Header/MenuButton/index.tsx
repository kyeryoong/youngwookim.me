import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import * as S from './styled';

const MenuButton = observer(() => {
  const { menuStore } = useStore();

  const handleClick = () => {
    menuStore.setIsMenuOpened(!menuStore.isMenuOpened);
  };

  return (
    <S.MenuButtonWrapper onClick={handleClick}>
      <S.MenuButtonsElements1 $isMenuOpened={menuStore.isMenuOpened} />
      <S.MenuButtonsElements2 $isMenuOpened={menuStore.isMenuOpened} />
      <S.MenuButtonsElements3 $isMenuOpened={menuStore.isMenuOpened} />
    </S.MenuButtonWrapper>
  );
});

export default MenuButton;
