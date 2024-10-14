import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';

import { PostItemModel } from '@/models/post';
import { useStore } from '@/stores';

import * as S from './styled';

const PostItem = observer(({ _id, title, userName }: PostItemModel) => {
  const { postStore } = useStore();
  const router = useRouter();

  const handlePostItemClick = () => {
    postStore.setPageMode('read');
    postStore.setCurrentId(_id);
    router.push(`/post/${_id}`);
  };

  return (
    <S.PostWrapper key={_id} onClick={handlePostItemClick}>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostUserName>{userName}</S.PostUserName>
    </S.PostWrapper>
  );
});

export default PostItem;
