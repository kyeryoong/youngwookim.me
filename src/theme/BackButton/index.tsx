import * as S from './styled';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

const BackButton = ({ onClick, disabled }: ButtonProps) => {
  return (
    <S.BackButtonWrapper onClick={onClick} disabled={disabled}>
      <S.BackIcon />
    </S.BackButtonWrapper>
  );
};

export default BackButton;
