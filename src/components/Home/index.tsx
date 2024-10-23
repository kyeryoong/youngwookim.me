import { useEffect, useState } from 'react';

import Home1 from './Home1';
import Home2 from './Home2';
import * as S from './styled';

const Home = () => {
  const [page, setPage] = useState<number>(0);

  const text = '안녕하세요. 프론트엔드 개발자 김영우입니다.';
  const [textIndex, setTextIndex] = useState<number>(0);
  const [isTextIncreasing, setIsTextIncreasing] = useState<boolean>(true);
  const [isTextPaused, setIsTextPaused] = useState<boolean>(false);
  const [showCursor, setShowCursor] = useState<boolean>(false);

  useEffect(() => {
    const pageInterval = setInterval(() => {
      setPage((prev) => (prev === 0 ? 1 : 0));
    }, 10000);

    return () => clearInterval(pageInterval);
  }, []);

  useEffect(() => {
    if (isTextPaused) return;

    const textInterval = setInterval(() => {
      setTextIndex((prevTextIndex) => {
        if (isTextIncreasing) {
          if (prevTextIndex === text.length + 1) {
            setIsTextPaused(true);
            clearInterval(textInterval);
            setTimeout(() => {
              setIsTextPaused(false);
              setIsTextIncreasing(false);
            }, 3000);
            return prevTextIndex - 1;
          }
          return prevTextIndex + 1;
        } else {
          if (prevTextIndex === 0) {
            setIsTextIncreasing(true);
            return prevTextIndex + 1;
          }
          return prevTextIndex - 1;
        }
      });
    }, 100);

    return () => clearInterval(textInterval);
  }, [isTextIncreasing]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <S.HomeWrapper page={page}>
      <Home1 />
      <Home2 />

      <S.SubText>
        {text.slice(0, textIndex)}
        <S.Cursor show={showCursor}>|</S.Cursor>
      </S.SubText>
    </S.HomeWrapper>
  );
};

export default Home;
