import * as S from './styled';
import store from '@/stores/store';
import { observer } from 'mobx-react';

const Logo = observer(() => {
  const handleLogoClick = () => {
    store.setIsMenuOpen(false);
  };

  return (
    <S.LogoWrapper onClick={handleLogoClick} href="/">
      <S.LogoImage width={200} height={200} alt="youngwookim.me Logo" src={'/logo_white.png'} />
      <S.LogoTitle>youngwookim.me</S.LogoTitle>
    </S.LogoWrapper>
  );
});

export default Logo;
