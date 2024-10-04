import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import * as S from './styled';

const ThemeModeButton = observer(() => {
  const { menuStore, themeStore } = useStore();

  const handleClick = () => {
    themeStore.toggleTheme();
  };

  return (
    <S.ThemeModeButtonWrapper onClick={handleClick} $show={menuStore.isMenuOpened}>
      <S.ToggleSwitchWrapper>
        <S.ToggleSwitch />
      </S.ToggleSwitchWrapper>
    </S.ThemeModeButtonWrapper>
  );
});

export default ThemeModeButton;
