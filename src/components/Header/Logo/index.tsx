import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import * as S from './styled';

const Logo = observer(() => {
  const { menuStore } = useStore();

  const handleLogoClick = () => {
    menuStore.setIsMenuOpened(false);
  };

  return (
    <S.LogoWrapper onClick={handleLogoClick} href="/">
      <S.LogoTitle>youngwookim.me</S.LogoTitle>
    </S.LogoWrapper>
  );
});

export default Logo;
