import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import * as S from './styled';

const Switch = observer(() => {
  const handleClick = () => {
    store.toggleTheme();
  };

  return (
    <S.SwitchWrapper onClick={handleClick}>
      <S.Switch isTurnedOn={store.theme === 'light'} />
    </S.SwitchWrapper>
  );
});

export default Switch;
