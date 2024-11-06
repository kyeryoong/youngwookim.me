import { forwardRef, ReactNode } from 'react';

import * as S from './styled';

type LabelProps = {
  children: ReactNode;
};

const Label = forwardRef<HTMLDivElement, LabelProps>(({ children }, ref) => {
  return <S.LabelWrapper ref={ref}>{children}</S.LabelWrapper>;
});

Label.displayName = 'Label';

export default Label;
