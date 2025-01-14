'use client';

import { observer } from 'mobx-react-lite';
import { signOut, useSession } from 'next-auth/react';
import { useCallback } from 'react';

import useStore from '@/stores';

import Logo from './Logo';
import MenuButton from './MenuButton';
import * as S from './styled';
import ThemeModeButton from './ThemeModeButton';

const Header = observer(() => {
  const { menuStore } = useStore();
  const { data: session } = useSession();

  const handleLogOutButtonClick = useCallback(() => {
    const res = window.confirm('로그아웃 하시겠습니까?');

    if (res) {
      signOut();
    }
  }, []);

  return (
    <S.HeaderWrapper showHeader={menuStore.showHeader}>
      <Logo />
      <ThemeModeButton />
      <MenuButton />

      {session && (
        <S.AdminBanner>
          <S.AdminIcon />
          관리자 모드
          <S.AdminLogOutButton onClick={handleLogOutButtonClick} />
        </S.AdminBanner>
      )}
    </S.HeaderWrapper>
  );
});

export default Header;
