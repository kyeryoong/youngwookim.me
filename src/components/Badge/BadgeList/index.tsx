'use client';

import { Children, ReactNode } from 'react';

import * as S from './styled';

type BadgeListProps = {
  name?: string;
  gap?: number;
  children?: ReactNode;
};

const BadgeList = ({ name, gap = 20, children }: BadgeListProps) => {
  return (
    <S.BadgeListWrapper $gap={gap}>
      {name && (
        <S.BadgeListHeader>
          <S.BadgeListCategoryName>{name}</S.BadgeListCategoryName>
          <S.BadgeListCount>{Children.count(children)}</S.BadgeListCount>
        </S.BadgeListHeader>
      )}

      {children}
    </S.BadgeListWrapper>
  );
};

export default BadgeList;
