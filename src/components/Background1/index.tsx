import * as S from './styled';

export default function Background1() {
  return (
    <S.BackgroundWrapper>
      <S.Asterisk src={'/home/asterisk.mp4'} autoPlay muted loop />
      <S.ComponentSymbol src={'/home/component_symbol.mp4'} autoPlay muted loop />
      <S.ArrowFunction src={'/home/arrow-function.mp4'} autoPlay muted loop />
    </S.BackgroundWrapper>
  );
}
