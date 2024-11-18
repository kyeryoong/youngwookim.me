import isMobile from '@/utils/isMobile';

import Phone from './Phone';
import * as S from './styled';

type Page5Props = {
  positionY: number;
};

const Page5 = ({ positionY }: Page5Props) => {
  const vh = window.innerHeight;

  const translateXArray = isMobile()
    ? [
        [0, 0, 0],
        [-100, 0, 0],
        [-100, -100, 0],
      ]
    : [
        [-10, 0, 10],
        [-150, -5, 5],
        [-150, -150, 0],
      ];

  const getDescriptionIndex = () => {
    if (positionY < 13.5 * vh) {
      return 0;
    } else if (positionY >= 13.5 * vh && positionY < 14.5 * vh) {
      return 1;
    } else if (positionY >= 14.5 * vh) {
      return 2;
    } else {
      return 0;
    }
  };

  return (
    <S.Page5Wrapper>
      <S.Scene1>
        <S.TitleWrapper>
          <S.Title1 progress={((positionY - 10.5 * vh) / vh) * 100}>
            사용자 경험을 생각하며 개발합니다.
          </S.Title1>
        </S.TitleWrapper>
      </S.Scene1>

      <S.Scene2>
        <S.DescriptionListWrapper>
          <S.Title2>
            <S.Title2Text>사용자 경험을 생각하며 개발합니다.</S.Title2Text>
            <S.Title2Index>
              <S.Title2IndexHighlight>{getDescriptionIndex() + 1}</S.Title2IndexHighlight> /{' '}
              {translateXArray.length}
            </S.Title2Index>
          </S.Title2>

          <S.DescriptionWrapper
            style={{
              transform: `translateX(${translateXArray[getDescriptionIndex()][0]}%)`,
              zIndex: 3,
            }}
          >
            <S.PhoneWrapper>
              <Phone videoSrc={'/profile/language.mp4'} />
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
              transform: `translateX(${translateXArray[getDescriptionIndex()][1]}%)`,
              zIndex: 2,
            }}
          >
            <S.PhoneWrapper>
              <Phone videoSrc={'/profile/theme.mp4'} />
            </S.PhoneWrapper>

            <S.Description>
              <S.DescriptionTitle>다크 모드</S.DescriptionTitle>
              <S.DescriptionText>밤이나 어두운 곳에서 눈의 피로를 줄여드릴게요.</S.DescriptionText>
            </S.Description>
          </S.DescriptionWrapper>

          <S.DescriptionWrapper
            style={{
              transform: `translateX(${translateXArray[getDescriptionIndex()][2]}%)`,
              zIndex: 1,
            }}
          >
            <S.PhoneWrapper>
              <Phone videoSrc={'/profile/zip_download.mp4'} />
            </S.PhoneWrapper>

            <S.Description>
              <S.DescriptionTitle>이미지 일괄 다운로드</S.DescriptionTitle>
              <S.DescriptionText>
                모든 이미지를 하나하나 다운로드할 필요 없이 한 번에 다운로드하게 해드릴게요.
              </S.DescriptionText>
            </S.Description>
          </S.DescriptionWrapper>
        </S.DescriptionListWrapper>
      </S.Scene2>
    </S.Page5Wrapper>
  );
};

export default Page5;
