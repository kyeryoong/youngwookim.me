import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import Logo from './Logo';
import MenuButton from './MenuButton';
import * as S from './styled';
import ThemeModeButton from './ThemeModeButton';

const Header = observer(() => {
  const { menuStore } = useStore();

  return (
    <S.HeaderWrapper showHeader={menuStore.showHeader}>
      <Logo />
      <ThemeModeButton />
      <MenuButton />
    </S.HeaderWrapper>
  );
});

export default Header;
