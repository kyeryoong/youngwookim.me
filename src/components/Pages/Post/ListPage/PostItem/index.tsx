import { observer } from 'mobx-react-lite';

import { PostItemModel } from '@/models/post';
import { useStore } from '@/stores';

import * as S from './styled';

const PostItem = observer(
  ({ _id, index, title, userName, createdAt, isAdmin }: PostItemModel & { index: number }) => {
    const { postStore } = useStore();

    const handlePostItemClick = () => {
      postStore.setPageMode('read');
      postStore.setCurrentId(_id);
    };

    const timeToString = (createdAt: string) => {
      const start = new Date(createdAt);
      const end = new Date();

      const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
      if (seconds < 60) {
        return '방금 전';
      }

      const minutes = seconds / 60;
      if (minutes < 60) {
        return `${Math.floor(minutes)}분 전`;
      }

      const hours = minutes / 60;
      if (hours < 24) {
        return `${Math.floor(hours)}시간 전`;
      }

      const days = hours / 24;
      if (days < 7) {
        return `${Math.floor(days)}일 전`;
      }

      return start.toLocaleDateString('ko-KR');
    };

    return (
      <S.PostItemWrapper key={_id} onClick={handlePostItemClick}>
        <S.PostIndex>{index}</S.PostIndex>
        <S.PostTitle>
          {isAdmin && <S.PostTitleAdminPrefix>[관리자] </S.PostTitleAdminPrefix>}
          {title}
        </S.PostTitle>
        <S.PostCreatedAt>{timeToString(createdAt)}</S.PostCreatedAt>
        <S.PostUserName>
          {userName}
          {isAdmin && '(관리자)'}
        </S.PostUserName>
      </S.PostItemWrapper>
    );
  },
);

export default PostItem;
