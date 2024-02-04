import * as S from './styled';

export default function Background1() {
  return (
    <S.BackgroundWrapper>
      <S.Asterisk src={'/home/asterisk.mp4'} autoPlay muted loop />
      <S.ArrowBracket src={'/home/arrow_bracket.mp4'} autoPlay muted loop />
    </S.BackgroundWrapper>
  );
}
