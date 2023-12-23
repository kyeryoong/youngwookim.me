import * as S from './styled';
import store from '../../../stores/store';
import { observer } from 'mobx-react';

const MenuBar = observer(() => {
  return (
    <>
      <S.MeunBarWrapper className={store.isMenuOpen ? 'show' : 'hide'}>
        <S.Menu>Home</S.Menu>
        <S.Menu>About</S.Menu>
      </S.MeunBarWrapper>
      <S.Background className={store.isMenuOpen ? 'show' : 'hide'} />
    </>
  );
});

export default MenuBar;
