import Phone from './Phone';
import * as S from './styled';

type Page5Props = {
  positionY: number;
};

const Page5 = ({ positionY }: Page5Props) => {
  const vh = window.innerHeight;

  return (
    <S.Page5Wrapper>
      <S.Scene1>
        <S.TitleWrapper>
          <S.Title progress={((positionY - 10.5 * vh) / vh) * 100}>
            사용자 경험을 생각하며 개발합니다.
          </S.Title>
        </S.TitleWrapper>
      </S.Scene1>

      <S.Scene2>
        <S.DescriptionWrapper>
          <S.Description>
            <S.DescriptionTitle>다국어 처리</S.DescriptionTitle>
            <S.DescriptionText>
              글로벌 시대에 맞게 사용자가 다양한 언어를 선택할 수 있게 해드릴게요.
            </S.DescriptionText>
          </S.Description>

          <Phone videoSrc={'/profile/language.mp4'} />
        </S.DescriptionWrapper>

        <S.DescriptionWrapper>
          <S.Description>
            <S.DescriptionTitle>다크 모드</S.DescriptionTitle>
            <S.DescriptionText>밤이나 어두운 곳에서 눈의 피로를 줄여드릴게요.</S.DescriptionText>
          </S.Description>

          <Phone videoSrc={'/profile/theme.mp4'} />
        </S.DescriptionWrapper>

        <S.DescriptionWrapper>
          <S.Description>
            <S.DescriptionTitle>이미지 일괄 다운로드</S.DescriptionTitle>
            <S.DescriptionText>
              모든 이미지를 하나하나 다운로드할 필요 없이 한 번에 다운로드하게 해드릴게요.
            </S.DescriptionText>
          </S.Description>

          <Phone videoSrc={'/profile/zip_download.mp4'} />
        </S.DescriptionWrapper>
      </S.Scene2>
    </S.Page5Wrapper>
  );
};

export default Page5;
