import { ReactNode } from 'react';

import * as S from './styled';

type TextProps = {
  children: ReactNode;
  marginBottom?: number;
};

const Text = ({ children, marginBottom = 80 }: TextProps) => {
  return <S.TextWrapper marginBottom={marginBottom}>{children}</S.TextWrapper>;
};

export default Text;
