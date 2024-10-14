import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

import * as S from './styled';

type PostHeaderProps = {
  title: string;
  leftElements?: ReactNode;
  rightElements?: ReactNode;
};

const PostHeader = observer(({ title, leftElements, rightElements }: PostHeaderProps) => {
  return (
    <S.PostHeaderWrapper>
      {leftElements}
      <S.PostHeaderTitle>{title}</S.PostHeaderTitle>
      {rightElements}
    </S.PostHeaderWrapper>
  );
});

export default PostHeader;
