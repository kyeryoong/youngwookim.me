import * as S from './styled';

type Page3Props = {
  positionY: number;
};

const Page3 = ({ positionY }: Page3Props) => {
  const vh = window.innerHeight;

  return (
    <S.Page3Wrapper>
      <S.Scene1>
        <S.Title1Wrapper>
          <S.Title1Top progress={((positionY - 4.5 * vh) / vh) * 100}>다양한 사람들과</S.Title1Top>
          <S.Title1Bottom progress={((positionY - 4.5 * vh) / vh) * 100}>
            함께 일할 수 있습니다.
          </S.Title1Bottom>
        </S.Title1Wrapper>
      </S.Scene1>

      <S.Scene2
        style={{
          clipPath:
            (positionY - 6.5 * vh) / vh > 0
              ? `circle(${((positionY - 6.5 * vh) / vh) * 100}%)`
              : 'circle(0%)',
        }}
      >
        <S.Title2Begin show={positionY - 8 * vh > 0}>
          다양한 사람들과
          <br />
          함께 일할 수 있습니다.
        </S.Title2Begin>

        <S.Title2End show={positionY - 8 * vh > 0}>
          다양한 사람들과
          <br />
          함께 일할 수 있습니다.
        </S.Title2End>

        <S.Scene2Background show={positionY - 8 * vh > 0} />
      </S.Scene2>
    </S.Page3Wrapper>
  );
};

export default Page3;
