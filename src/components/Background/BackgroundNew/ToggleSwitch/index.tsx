import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import * as S from './styled';

const ToggleSwitch = observer(() => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(true);

  const handleClick = () => {
    setIsTurnedOn(!isTurnedOn);
  };

  return (
    <S.ToggleSwitchWrapper onClick={handleClick}>
      <S.ToggleSwitch isTurnedOn={isTurnedOn} />
    </S.ToggleSwitchWrapper>
  );
});

export default ToggleSwitch;
