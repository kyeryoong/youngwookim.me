import { useTheme } from 'styled-components';

import Button from '@/theme/Button';

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
  onMoreButtonClick: () => void;
};

const NavigationElement = ({
  index,
  title,
  isFocused,
  progress,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMoreButtonClick,
}: NavigationElementProps) => {
  const theme = useTheme();

  return (
    <S.NavigationElement isFocused={isFocused} onClick={onClick}>
      <S.Index isFocused={isFocused}>{index}</S.Index>

      <S.TitleWrapper isFocused={isFocused} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <S.KoreanTitle isFocused={isFocused}>{title.kor}</S.KoreanTitle>
        <S.EnglishTitle isFocused={isFocused}>{title.eng}</S.EnglishTitle>
        <S.Label isFocused={isFocused}>{title.label}</S.Label>

        <S.ButtonWrapper isFocused={isFocused}>
          <Button
            onClick={onMoreButtonClick}
            customColor={{
              backgroundColor: theme.color.white,
              hoveredBackgroundColor: theme.color.gray[200],
              textColor: theme.color.gray[800],
            }}
          >
            사진 보기
          </Button>
        </S.ButtonWrapper>
      </S.TitleWrapper>

      <S.ProgressBarWrapper>
        <S.ProgressBar isFocused={isFocused} progress={progress} />
      </S.ProgressBarWrapper>
    </S.NavigationElement>
  );
};

export default NavigationElement;
