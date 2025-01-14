import { observer } from 'mobx-react-lite';

import useStore from '@/stores';

import * as S from './styled';

const Logo = observer(() => {
  const { menuStore } = useStore();

  const handleLogoClick = () => {
    menuStore.setIsMenuOpened(false);
  };

  return (
    <S.LogoTitle onClick={handleLogoClick} href="/">
      youngwookim.me
    </S.LogoTitle>
  );
});

export default Logo;
