import * as S from './styled';

type LabelProps = {
  children: string;
};

const Label = ({ children }: LabelProps) => {
  return <S.LabelWrapper>{children}</S.LabelWrapper>;
};

export default Label;
