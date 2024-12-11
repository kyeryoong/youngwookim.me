import * as S from './styled';

const Home2 = () => {
  return (
    <S.HomeWrapper>
      <S.TitleTop>
        <S.Highlight degree={270}>아름다운 디자인</S.Highlight>을
        <br />
        좋아하는
      </S.TitleTop>

      <S.TitleBottom>
        <S.Highlight degree={90}>프론트엔드</S.Highlight> 개발자
        <br />
        김영우입니다
      </S.TitleBottom>
    </S.HomeWrapper>
  );
};

export default Home2;
