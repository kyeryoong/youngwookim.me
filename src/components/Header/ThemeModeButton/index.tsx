import { useAtomValue, useSetAtom } from 'jotai';
import { observer } from 'mobx-react-lite';
import { useTheme } from 'styled-components';

import useStore from '@/stores';
import { themeAtom, toggleThemeAtom } from '@/stores/themeAtom';
import ToggleSwitch from '@/theme/ToggleSwitch';
import isMobile from '@/utils/isMobile';

import * as S from './styled';

const ThemeModeButton = observer(() => {
  const { menuStore } = useStore();
  const themeValue = useAtomValue(themeAtom);
  const toggleThemeValue = useSetAtom(toggleThemeAtom);

  const theme = useTheme();

  const handleClick = () => {
    toggleThemeValue();
  };

  return (
    <S.ThemeModeButtonWrapper onClick={handleClick} $show={menuStore.isMenuOpened}>
      <ToggleSwitch
        isTurnedOn={themeValue === 'light'}
        size={isMobile() ? 22 : 30}
        color={{ turnedOnColor: theme.color.yellow[600], turnedOffColor: theme.color.gray[300] }}
      />
    </S.ThemeModeButtonWrapper>
  );
});

export default ThemeModeButton;
