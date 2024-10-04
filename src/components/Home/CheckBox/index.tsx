import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import * as S from './styled';

const CheckBox = observer(() => {
  const [isTurnedOn, setIsTurnedOn] = useState<boolean>(true);

  const handleClick = () => {
    setIsTurnedOn(!isTurnedOn);
  };

  return (
    <S.CheckBoxWrapper onClick={handleClick}>
      <S.CheckIcon isTurnedOn={isTurnedOn} />
    </S.CheckBoxWrapper>
  );
});

export default CheckBox;
