import { Children, ReactNode } from 'react';

import * as S from './styled';

type TechListProps = {
  name: string;
  gap?: number;
  children?: ReactNode;
};

export const TechList = ({ name, gap = 20, children }: TechListProps) => {
  return (
    <S.TechListWrapper $gap={gap}>
      <S.TechListHeader>
        <S.TechListCategoryName>{name}</S.TechListCategoryName>
        <S.TechListCount>{Children.count(children)}</S.TechListCount>
      </S.TechListHeader>
      {children}
    </S.TechListWrapper>
  );
};
