import { ReactNode } from 'react';

import * as S from './styled';

type SourceCodeButtonListProps = {
  children?: ReactNode;
  gap?: number;
  marginBottom?: number;
};

const SourceCodeButtonList = ({
  children,
  gap = 40,
  marginBottom = 80,
}: SourceCodeButtonListProps) => {
  return (
    <S.MemberListWrapper gap={gap} marginBottom={marginBottom}>
      {children}
    </S.MemberListWrapper>
  );
};

export default SourceCodeButtonList;
