import { Children, ReactNode } from 'react';

import * as S from './styled';

type TechListProps = {
  categoryName: string;
  children?: ReactNode;
};

export const TechList = ({ categoryName, children }: TechListProps) => {
  return (
    <S.TechListWrapper>
      <S.TechListHeader>
        <S.TechListCategoryName>{categoryName}</S.TechListCategoryName>
        <S.TechListCount>{Children.count(children)}</S.TechListCount>
      </S.TechListHeader>
      {children}
    </S.TechListWrapper>
  );
};
