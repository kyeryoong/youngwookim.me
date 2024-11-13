import * as S from './styled';

type Page3Props = {
  positionY: number;
};

const Page3 = ({ positionY }: Page3Props) => {
  const vh = window.innerHeight;

  return (
    <S.Page3Wrapper>
      <S.Scene1>
        <S.TitleWrapper progress={((positionY - 5.5 * vh) / vh) * 100}>
          <S.TitleTop progress={((positionY - 4 * vh) / vh) * 100}>다양한 사람들과</S.TitleTop>
          <S.TitleBottom progress={((positionY - 4 * vh) / vh) * 100}>
            함께 일할 수 있습니다.
          </S.TitleBottom>
        </S.TitleWrapper>
      </S.Scene1>

      <S.Scene2
        style={{
          clipPath:
            ((positionY - 6 * vh) / vh) * 100 > 0
              ? `circle(${((positionY - 6 * vh) / vh) * 100}%)`
              : 'circle(0%)',
        }}
      >
        다양한 사람들과
        <br />
        함께 일할 수 있습니다.
      </S.Scene2>

      {positionY - 7.5 * vh > 0 && (
        <S.Scene3>
          <S.Side progress={(positionY - 8 * vh) / vh}>
            다양한 사람들과
            <br />
            함께 일할 수 있습니다.
          </S.Side>
        </S.Scene3>
      )}

      {positionY - 8.5 * vh > 0 && <S.Scene4></S.Scene4>}
    </S.Page3Wrapper>
  );
};

export default Page3;
