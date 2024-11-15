import { useTheme } from 'styled-components';

import * as S from './styled';

type Page3Props = {
  positionY: number;
};

const Page3 = ({ positionY }: Page3Props) => {
  const theme = useTheme();
  const vh = window.innerHeight;

  return (
    <S.Page3Wrapper>
      <S.Scene1>
        <S.TitleWrapper>
          <S.TitleTop progress={((positionY - 4.5 * vh) / vh) * 100}>다양한 사람들과</S.TitleTop>
          <S.TitleBottom progress={((positionY - 4.5 * vh) / vh) * 100}>
            함께 일할 수 있습니다.
          </S.TitleBottom>
        </S.TitleWrapper>
      </S.Scene1>

      <S.Scene2
        style={{
          clipPath:
            (positionY - 6.5 * vh) / vh > 0
              ? `circle(${((positionY - 6.5 * vh) / vh) * 100}%)`
              : 'circle(0%)',
          backgroundColor:
            (positionY - 8 * vh) / vh > 0 ? theme.color.black : theme.color.youngBlue,
        }}
      >
        <S.Title progress={((positionY - 8 * vh) / vh) * 100}>
          다양한 사람들과
          <br />
          함께 일할 수 있습니다.
        </S.Title>
      </S.Scene2>
    </S.Page3Wrapper>
  );
};

export default Page3;
