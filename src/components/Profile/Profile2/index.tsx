import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';

import { useStore } from '@/stores';

import * as S from './styled';

const Profile2 = observer(() => {
  const { themeStore } = useStore();

  const card1VideoRef = useRef<HTMLVideoElement>(null);
  const card2VideoRef = useRef<HTMLVideoElement>(null);

  const [cardIndex, setCardIndex] = useState<number>(0);
  const [isCard1VideoLoaded, setIsCard1VideoLoaded] = useState<boolean>(false);
  const [isCard2VideoLoaded, setIsCard2VideoLoaded] = useState<boolean>(false);

  const handleCard1VideoOnLoadedData = () => {
    setIsCard1VideoLoaded(true);
  };

  const handleCard2VideoOnLoadedData = () => {
    setIsCard2VideoLoaded(true);
  };

  useEffect(() => {
    if (isCard1VideoLoaded && isCard2VideoLoaded) {
      const timeout = setTimeout(() => {
        setCardIndex(1);

        const interval = setInterval(() => {
          setCardIndex((prev) => (prev === 0 ? 1 : 0));
        }, 7000);
        return () => clearInterval(interval);
      }, 3500);
      return () => clearTimeout(timeout);
    }
  }, [isCard1VideoLoaded, isCard2VideoLoaded]);

  useEffect(() => {
    if (isCard1VideoLoaded && isCard2VideoLoaded && card1VideoRef && card2VideoRef) {
      card1VideoRef.current?.play();
      card2VideoRef.current?.play();
    }
  }, [isCard1VideoLoaded, isCard2VideoLoaded, themeStore.theme]);

  return (
    <S.ProfilePageWrapper>
      <S.Title>
        Education &<br />
        Experience
      </S.Title>

      <S.CardVideo1
        ref={card1VideoRef}
        src={`/profile/1_${themeStore.theme}.mp4`}
        onLoadedData={handleCard1VideoOnLoadedData}
        cardIndex={cardIndex}
        muted
        loop
      />
      <S.CardVideo2
        ref={card2VideoRef}
        src={`/profile/2_${themeStore.theme}.mp4`}
        onLoadedData={handleCard2VideoOnLoadedData}
        cardIndex={cardIndex}
        muted
        loop
      />

      <S.ContentWrapper>
        <S.Content>
          <S.ContentTitle>홍익대학교</S.ContentTitle>
          <S.ContentSubtitle>컴퓨터공학전공</S.ContentSubtitle>
          <S.ContentDays>2017.3 ~ 2023.2</S.ContentDays>
        </S.Content>
        <S.Content>
          <S.ContentTitle>티맥스와플</S.ContentTitle>
          <S.ContentSubtitle>WAPL 협업 솔루션 - Front-end 연구원</S.ContentSubtitle>
          <S.ContentDays>2023.7 ~ </S.ContentDays>
        </S.Content>
      </S.ContentWrapper>
    </S.ProfilePageWrapper>
  );
});

export default Profile2;
