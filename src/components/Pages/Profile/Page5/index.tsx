import { useCallback, useEffect, useRef, useState } from 'react';

import isMobile from '@/utils/isMobile';

import Phone from './Phone';
import * as S from './styled';

type Page5Props = {
  positionY: number;
};

const Page5 = ({ positionY }: Page5Props) => {
  const vh = window.innerHeight;

  const [descriptionIndex, setDescriptionIndex] = useState<number>(0);

  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  const translateXArray = isMobile()
    ? [
        [0, 0, 0, 0],
        [-100, 0, 0, 0],
        [-100, -100, 0, 0],
        [-100, -100, -100, 0],
      ]
    : [
        [-9, -3, 3, 9],
        [-150, -6, 0, 6],
        [-150, -150, -3, 3],
        [-150, -150, -150, 0],
      ];

  const handleScroll = useCallback(() => {
    if (positionY >= 12.25 * vh && positionY < 14 * vh) {
      setDescriptionIndex(0);
      videoRef1.current?.play();
      videoRef2.current?.pause();
      videoRef3.current?.pause();
      videoRef4.current?.pause();

      setTimeout(() => {
        if (videoRef2.current && videoRef3.current && videoRef4.current) {
          videoRef2.current.currentTime = 0;
          videoRef3.current.currentTime = 0;
          videoRef4.current.currentTime = 0;
        }
      }, 500);
    } else if (positionY >= 14 * vh && positionY < 15 * vh) {
      setDescriptionIndex(1);
      videoRef1.current?.pause();
      videoRef2.current?.play();
      videoRef3.current?.pause();
      videoRef4.current?.pause();
      setTimeout(() => {
        if (videoRef1.current && videoRef3.current && videoRef4.current) {
          videoRef1.current.currentTime = 0;
          videoRef3.current.currentTime = 0;
          videoRef4.current.currentTime = 0;
        }
      }, 500);
    } else if (positionY >= 15 * vh && positionY < 16 * vh) {
      setDescriptionIndex(2);
      videoRef1.current?.pause();
      videoRef2.current?.pause();
      videoRef3.current?.play();
      videoRef4.current?.pause();
      setTimeout(() => {
        if (videoRef1.current && videoRef2.current && videoRef4.current) {
          videoRef1.current.currentTime = 0;
          videoRef2.current.currentTime = 0;
          videoRef4.current.currentTime = 0;
        }
      }, 500);
    } else if (positionY >= 16 * vh) {
      setDescriptionIndex(3);
      videoRef1.current?.pause();
      videoRef2.current?.pause();
      videoRef3.current?.pause();
      videoRef4.current?.play();
      setTimeout(() => {
        if (videoRef1.current && videoRef2.current && videoRef3.current) {
          videoRef1.current.currentTime = 0;
          videoRef2.current.currentTime = 0;
          videoRef3.current.currentTime = 0;
        }
      }, 500);
    } else {
      setDescriptionIndex(0);
    }
  }, [positionY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [positionY]);

  console.log(translateXArray[descriptionIndex]);

  return (
    <S.Page5Wrapper>
      <S.Scene1>
        <S.TitleWrapper>
          <S.Title1 progress={((positionY - 11 * vh) / vh) * 100}>
            사용자 경험을 생각하며 개발합니다.
          </S.Title1>
        </S.TitleWrapper>
      </S.Scene1>

      <S.Scene2>
        <S.DescriptionListWrapper>
          <S.Title2>
            <S.Title2Text>사용자 경험을 생각하며 개발합니다.</S.Title2Text>
            <S.Title2Index>
              <S.Title2IndexHighlight>{(descriptionIndex ?? -99) + 1}</S.Title2IndexHighlight> /{' '}
              {translateXArray.length}
            </S.Title2Index>
          </S.Title2>

          <S.DescriptionWrapper
            style={{
              transform: `translateX(${translateXArray[descriptionIndex][0]}%)`,
              zIndex: 4,
            }}
          >
            <S.PhoneWrapper>
              <Phone videoSrc={'/profile/language.mp4'} videoRef={videoRef1} />
            </S.PhoneWrapper>

            <S.Description>
              <S.DescriptionTitle>다국어 처리</S.DescriptionTitle>
              <S.DescriptionText>
                글로벌 시대에 맞게 사용자가 다양한 언어를 선택할 수 있게 해드릴게요.
              </S.DescriptionText>
            </S.Description>
          </S.DescriptionWrapper>

          <S.DescriptionWrapper
            style={{
              transform: `translateX(${translateXArray[descriptionIndex][1]}%)`,
              zIndex: 3,
            }}
          >
            <S.PhoneWrapper>
              <Phone videoSrc={'/profile/theme.mp4'} videoRef={videoRef2} />
            </S.PhoneWrapper>

            <S.Description>
              <S.DescriptionTitle>다크 모드</S.DescriptionTitle>
              <S.DescriptionText>밤이나 어두운 곳에서 눈의 피로를 줄여드릴게요.</S.DescriptionText>
            </S.Description>
          </S.DescriptionWrapper>

          <S.DescriptionWrapper
            style={{
              transform: `translateX(${translateXArray[descriptionIndex][2]}%)`,
              zIndex: 2,
            }}
          >
            <S.PhoneWrapper>
              <Phone videoSrc={'/profile/zip_download.mp4'} videoRef={videoRef3} />
            </S.PhoneWrapper>

            <S.Description>
              <S.DescriptionTitle>이미지 일괄 다운로드</S.DescriptionTitle>
              <S.DescriptionText>
                모든 이미지를 하나하나 다운로드할 필요 없이 한 번에 다운로드하게 해드릴게요.
              </S.DescriptionText>
            </S.Description>
          </S.DescriptionWrapper>

          <S.DescriptionWrapper
            style={{
              transform: `translateX(${translateXArray[descriptionIndex][3]}%)`,
              zIndex: 1,
            }}
          >
            <S.PhoneWrapper>
              <Phone videoSrc={'/profile/swipe_zoomin.mp4'} videoRef={videoRef4} />
            </S.PhoneWrapper>

            <S.Description>
              <S.DescriptionTitle>스와이프 & 줌/인 뷰어</S.DescriptionTitle>
              <S.DescriptionText>
                스와이프 제스처로 손쉽게 이미지를 이동할 수 있고, 핀치 줌 제스처로 더 큰 크기로
                이미지를 볼 수 있도록 했어요.
              </S.DescriptionText>
            </S.Description>
          </S.DescriptionWrapper>
        </S.DescriptionListWrapper>
      </S.Scene2>
    </S.Page5Wrapper>
  );
};

export default Page5;
