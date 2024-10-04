import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import * as S from './styled';

const LikeButton = observer(() => {
  const [count, setCount] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isHeartFilled, setIsHeartFilled] = useState<boolean>(false);

  const handleButtonClick = () => {
    setCount(count + 1);
    setIsClicked(true);
    setIsHeartFilled(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsHeartFilled(false);
    }, 2000);
  }, [count]);

  return (
    <S.LikeButtonWrapper onClick={handleButtonClick} isHeartFilled={isHeartFilled}>
      {isClicked ? <S.HeartFilledIcon /> : <S.HeartUnFilledIcon />}
      <S.Count>{count}</S.Count>
    </S.LikeButtonWrapper>
  );
});

export default LikeButton;
