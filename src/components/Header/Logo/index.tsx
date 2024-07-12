import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import * as S from './styled';

const Logo = observer(() => {
  const handleLogoClick = () => {
    store.setIsMenuOpened(false);
  };

  return (
    <S.LogoWrapper onClick={handleLogoClick} href="/">
      <S.LogoImage width={200} height={200} alt="youngwookim.me Logo" src={'/logo_white.png'} />
      <S.LogoTitle>youngwookim.me</S.LogoTitle>
    </S.LogoWrapper>
  );
});

export default Logo;
