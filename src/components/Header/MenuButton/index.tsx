import * as S from './styled';
import store from '../../../stores/store';
import { observer } from 'mobx-react';

const MenuButton = observer(() => {
  const handleClick = () => {
    store.setIsMenuOpen(!store.isMenuOpen);
  };

  return (
    <S.ButtonWrapper onClick={handleClick}>
      <S.ButtonsElements1 className={store.isMenuOpen ? 'opened' : 'closed'} />
      <S.ButtonsElements2 className={store.isMenuOpen ? 'opened' : 'closed'} />
      <S.ButtonsElements3 className={store.isMenuOpen ? 'opened' : 'closed'} />
    </S.ButtonWrapper>
  );
});

export default MenuButton;
