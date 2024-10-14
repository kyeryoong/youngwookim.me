import { observer } from 'mobx-react-lite';

import { PostItemModel } from '@/models/post';
import { useStore } from '@/stores';

import * as S from './styled';

const PostItem = observer(({ _id, title, userName }: PostItemModel) => {
  const { postStore } = useStore();

  const handlePostItemClick = () => {
    postStore.setPageMode('read');
    postStore.setCurrentId(_id);
  };

  return (
    <S.PostWrapper key={_id} onClick={handlePostItemClick}>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostUserName>{userName}</S.PostUserName>
    </S.PostWrapper>
  );
});

export default PostItem;
