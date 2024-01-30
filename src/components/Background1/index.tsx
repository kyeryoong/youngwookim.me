import * as S from './styled';

export default function Background1() {
  return (
    <S.BackgroundWrapper>
      <S.ToggleWrapper src={'/home/toggle_wrapper.png'} alt={'Toggle Button'} width={2000} height={1000} />
      <S.ToggleSwitch src={'/home/toggle_switch.png'} alt={'Toggle Button'} width={2000} height={1000} />

      <S.Computer1 src={'/home/computer_1.png'} alt={'Computer'} width={2000} height={2000} />
      <S.Computer2 src={'/home/computer_2.png'} alt={'Computer'} width={2000} height={2000} />

      <S.ArrowBracket src={'/home/arrow_bracket.mp4'} autoPlay muted loop />

      <S.Heading>Front-end</S.Heading>
    </S.BackgroundWrapper>
  );
}
