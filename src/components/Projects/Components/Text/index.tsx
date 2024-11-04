import * as S from './styled';

type TextProps = {
  children: string;
  marginBottom?: number;
};

const Text = ({ children, marginBottom = 64 }: TextProps) => {
  return <S.TextWrapper marginBottom={marginBottom}>{children}</S.TextWrapper>;
};

export default Text;
