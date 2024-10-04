import { observer } from 'mobx-react-lite';

import store from '@/stores/menuStore';

import * as S from './styled';

const Logo = observer(() => {
  const handleLogoClick = () => {
    store.setIsMenuOpened(false);
  };

  return (
    <S.LogoWrapper onClick={handleLogoClick} href="/">
      <S.LogoTitle>youngwookim.me</S.LogoTitle>
    </S.LogoWrapper>
  );
});

export default Logo;
