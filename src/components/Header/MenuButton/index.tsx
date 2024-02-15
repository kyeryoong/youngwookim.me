import { observer } from 'mobx-react';

import store from '../../../stores/store';
import * as S from './styled';

const MenuButton = observer(() => {
  const handleClick = () => {
    store.setIsMenuOpened(!store.isMenuOpened);
  };

  return (
    <S.ButtonWrapper onClick={handleClick}>
      <S.ButtonsElements1 isMenuOpened={store.isMenuOpened} />
      <S.ButtonsElements2 isMenuOpened={store.isMenuOpened} />
      <S.ButtonsElements3 isMenuOpened={store.isMenuOpened} />
    </S.ButtonWrapper>
  );
});

export default MenuButton;
