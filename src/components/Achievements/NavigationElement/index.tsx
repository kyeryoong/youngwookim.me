import * as S from './styled';

type TitleProps = {
  kor: string;
  eng: string;
  label: string;
};

type NavigationElementProps = {
  index: number;
  title: TitleProps;
  isFocused: boolean;
  progress: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const NavigationElement = ({
  index,
  title,
  isFocused,
  progress,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: NavigationElementProps) => {
  return (
    <S.NavigationElement isFocused={isFocused} onClick={onClick}>
      <S.TitleWrapper isFocused={isFocused} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <S.Index isFocused={isFocused}>{index}</S.Index>
        <S.KoreanTitle isFocused={isFocused}>{title.kor}</S.KoreanTitle>
        <S.EnglishTitle isFocused={isFocused}>{title.eng}</S.EnglishTitle>
        <S.Label isFocused={isFocused}>{title.label}</S.Label>
      </S.TitleWrapper>

      <S.ProgressBarWrapper>
        <S.ProgressBar isFocused={isFocused} progress={progress} />
      </S.ProgressBarWrapper>
    </S.NavigationElement>
  );
};

export default NavigationElement;
