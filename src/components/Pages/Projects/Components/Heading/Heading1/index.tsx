import { forwardRef, ReactNode } from 'react';

import * as S from './styled';

type Heading1Props = {
  children: ReactNode;
};

const Heading1 = forwardRef<HTMLDivElement, Heading1Props>(({ children }, ref) => {
  return <S.Heading1Wrapper ref={ref}>{children}</S.Heading1Wrapper>;
});

Heading1.displayName = 'H1';

export default Heading1;
