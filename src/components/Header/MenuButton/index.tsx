import { observer } from 'mobx-react-lite';

import store from '../../../stores/store';
import * as S from './styled';

const MenuButton = observer(() => {
  const handleClick = () => {
    store.setIsMenuOpened(!store.isMenuOpened);
  };

  return (
    <S.MenuButtonWrapper onClick={handleClick}>
      <S.MenuButtonsElements1 $isMenuOpened={store.isMenuOpened} />
      <S.MenuButtonsElements2 $isMenuOpened={store.isMenuOpened} />
      <S.MenuButtonsElements3 $isMenuOpened={store.isMenuOpened} />
    </S.MenuButtonWrapper>
  );
});

export default MenuButton;
