import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import * as S from './styled';

const ToggleSwitch = observer(() => {
  const handleClick = () => {
    store.toggleTheme();
  };

  return (
    <S.ToggleSwitchWrapper onClick={handleClick}>
      <S.ToggleSwitch isTurnedOn={store.theme === 'light'} />
    </S.ToggleSwitchWrapper>
  );
});

export default ToggleSwitch;
