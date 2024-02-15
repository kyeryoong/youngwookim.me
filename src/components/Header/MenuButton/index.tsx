import { observer } from 'mobx-react';

import store from '../../../stores/store';
import * as S from './styled';

const MenuButton = observer(() => {
  const handleClick = () => {
    store.setIsMenuOpened(!store.isMenuOpened);
  };

  return (
    <S.ButtonWrapper onClick={handleClick}>
      <S.ButtonsElements1 className={store.isMenuOpened ? 'opened' : 'closed'} />
      <S.ButtonsElements2 className={store.isMenuOpened ? 'opened' : 'closed'} />
      <S.ButtonsElements3 className={store.isMenuOpened ? 'opened' : 'closed'} />
    </S.ButtonWrapper>
  );
});

export default MenuButton;
