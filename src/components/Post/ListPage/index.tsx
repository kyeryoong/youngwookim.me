import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';

import Button from '../../../theme/Button';
import PostHeader from '../PostHeader';
import PostItem from './PostItem';
import * as S from './styled';

export const dynamic = 'force-dynamic';

const ListPage = observer(() => {
  const { postStore } = useStore();

  const [posts, setPosts] = useState<PostModel[]>([]);

  const handleCreateButtonClick = () => {
    postStore.setPageMode('create');
  };

  useEffect(() => {
    async function fetchPosts() {
      await postStore.fetchPosts();

      setPosts(postStore.posts);
    }

    fetchPosts();
  }, []);

  return (
    <S.ListPageWrapper>
      <PostHeader
        title={'게시판'}
        rightElements={<Button onClick={handleCreateButtonClick}>생성</Button>}
      />

      {posts.map((post) => (
        <PostItem key={post._id} _id={post._id} title={post.title} userName={post.userName} />
      ))}
    </S.ListPageWrapper>
  );
});

export default ListPage;
