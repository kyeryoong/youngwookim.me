import * as S from './styled';
import store from '../../../stores/store';
import { observer } from 'mobx-react';

const MenuButton = observer(() => {
  const handleClick = () => {
    store.setIsMenuOpen(!store.isMenuOpen);
  };

  return (
    <S.ButtonWrapper className={store.isMenuOpen ? 'show' : 'hide'} onClick={handleClick}>
      <S.ButtonsElements1 className={store.isMenuOpen ? 'show' : 'hide'} />
      <S.ButtonsElements2 className={store.isMenuOpen ? 'show' : 'hide'} />
      <S.ButtonsElements3 className={store.isMenuOpen ? 'show' : 'hide'} />
    </S.ButtonWrapper>
  );
});

export default MenuButton;
