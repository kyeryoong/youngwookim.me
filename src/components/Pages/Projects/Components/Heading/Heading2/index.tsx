import { ReactNode } from 'react';

import * as S from './styled';

type Heading2Props = {
  children: ReactNode;
};

const Heading2 = ({ children }: Heading2Props) => {
  return <S.Heading2Wrapper>{children}</S.Heading2Wrapper>;
};

export default Heading2;
