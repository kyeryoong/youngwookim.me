import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import * as S from './styled';

const Switch = observer(() => {
  const { themeStore } = useStore();

  const handleClick = () => {
    themeStore.toggleTheme();
  };

  return (
    <S.SwitchWrapper onClick={handleClick}>
      <S.Switch isTurnedOn={themeStore.theme === 'light'} />
    </S.SwitchWrapper>
  );
});

export default Switch;
