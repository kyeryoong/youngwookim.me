import * as S from './styled';

type Page1Props = {
  positionY: number;
};

const Page1 = ({ positionY }: Page1Props) => {
  const vh = window.innerHeight;

  return (
    <S.Page1Wrapper>
      <S.Page1Background showBackground={positionY > vh * 1} />

      <S.TextWrapper showBackground={positionY > vh * 1}>
        안녕하세요,
        <S.KeywordWrapper progress={Math.floor(positionY / vh)}>
          <S.Keyword show={Math.floor(positionY / vh) === 1} progress={Math.floor(positionY / vh)}>
            주니어 프론트엔드 <br />
            개발자
          </S.Keyword>
          <S.Keyword show={Math.floor(positionY / vh) === 2} progress={Math.floor(positionY / vh)}>
            사용자 경험을 <br />
            생각하는 개발자
          </S.Keyword>
          <S.Keyword show={Math.floor(positionY / vh) >= 3} progress={Math.floor(positionY / vh)}>
            아름다운 디자인을 <br />
            좋아하는 개발자
          </S.Keyword>
        </S.KeywordWrapper>
        김영우 입니다.
      </S.TextWrapper>
    </S.Page1Wrapper>
  );
};

export default Page1;
