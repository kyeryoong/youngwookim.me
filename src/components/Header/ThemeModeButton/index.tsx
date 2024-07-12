import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import * as S from './styled';

const ThemeModeButton = observer(() => {
  const handleClick = () => {
    store.toggleTheme();
  };

  return (
    <S.ThemeModeButtonWrapper onClick={handleClick} $show={store.isMenuOpened}>
      <S.ToggleSwitchWrapper>
        <S.ToggleSwitch />
      </S.ToggleSwitchWrapper>
    </S.ThemeModeButtonWrapper>
  );
});

export default ThemeModeButton;
