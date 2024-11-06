import { ReactNode } from 'react';

import * as S from './styled';

type MemberListProps = {
  children?: ReactNode;
  gap?: number;
  marginBottom?: number;
};

const MemberList = ({ children, gap = 40, marginBottom = 80 }: MemberListProps) => {
  return (
    <S.MemberListWrapper gap={gap} marginBottom={marginBottom}>
      {children}
    </S.MemberListWrapper>
  );
};

export default MemberList;
