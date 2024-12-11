import * as S from './styled';

const Home1 = () => {
  return (
    <S.HomeWrapper>
      <S.TitleTop>
        <S.Highlight degree={270}>사용자 경험</S.Highlight>을
        <br />
        생각하는
      </S.TitleTop>

      <S.TitleBottom>
        <S.Highlight degree={90}>프론트엔드</S.Highlight> 개발자
        <br />
        김영우입니다
      </S.TitleBottom>
    </S.HomeWrapper>
  );
};

export default Home1;
