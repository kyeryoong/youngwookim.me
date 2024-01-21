import * as S from './styled';
import store from '../../../stores/store';
import { observer } from 'mobx-react';

const MenuBar = observer(() => {
  const handleMenuClick = () => {
    store.setIsMenuOpen(false);
  };

  return (
    <>
      <S.MeunBarWrapper className={store.isMenuOpen ? 'show' : 'hide'}>
        <S.Menu onClick={handleMenuClick} href="/">
          Home
        </S.Menu>
        <S.Menu onClick={handleMenuClick} href="/tech">
          Tech
        </S.Menu>
      </S.MeunBarWrapper>
      {store.isMenuOpen && <S.Background />}
    </>
  );
});

export default MenuBar;
