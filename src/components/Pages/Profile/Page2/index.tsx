import { useCallback, useEffect, useRef, useState } from 'react';

import * as S from './styled';

type Page2Props = {
  positionY: number;
};

const Page2 = ({ positionY }: Page2Props) => {
  const vh = window.innerHeight;

  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const daysBetween = useCallback(() => {
    const today: Date = new Date();
    const targetDate: Date = new Date('2023-07-03');

    return Math.ceil(Math.abs(targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  }, []);

  const number = daysBetween();
  const frameRate = 1000 / 60;
  const duration = 2000;
  const totalFrame = Math.round(duration / frameRate);

  const show = positionY > 5 * vh && positionY < 7.5 * vh;

  const easeOutExpo = (t: number) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    let currentNumber = 0;

    if (show) {
      const counter = setInterval(() => {
        const progressRate = easeOutExpo(++currentNumber / totalFrame);
        setCount(Math.round(number * progressRate));

        if (progressRate === 1) {
          clearInterval(counter);
        }
      }, frameRate);
    }
  }, [show]);

  return (
    <S.Page2Wrapper>
      <S.DaysWrapper>
        <S.DaysValue ref={ref} show={show}>
          {count}
        </S.DaysValue>
        <S.DaysLabel isFinished={show && count === number}>
          days of
          <br />
          working experience
        </S.DaysLabel>
      </S.DaysWrapper>

      <S.ProgressWrapper progress={((positionY - 5 * vh) / (2 * vh)) * 100}>
        <S.ProgressBar />
        <S.ProgressIcon />
      </S.ProgressWrapper>
    </S.Page2Wrapper>
  );
};
export default Page2;
