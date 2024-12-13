import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';

import { useStore } from '@/stores';

import Logo from './Logo';
import MenuButton from './MenuButton';
import * as S from './styled';
import ThemeModeButton from './ThemeModeButton';

const Header = observer(() => {
  const { menuStore } = useStore();
  const { data: session } = useSession();

  return (
    <S.HeaderWrapper showHeader={menuStore.showHeader}>
      <Logo />
      <ThemeModeButton />
      <MenuButton />

      {session && (
        <S.AdminBanner>
          <S.AdminIcon />
          관리자 모드
        </S.AdminBanner>
      )}
    </S.HeaderWrapper>
  );
});

export default Header;
