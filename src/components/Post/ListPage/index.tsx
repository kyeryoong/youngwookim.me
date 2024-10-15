import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';
import LoadingSpinner from '@/theme/LoadingSpinner';

import Button from '../../../theme/Button';
import PostHeader from '../PostHeader';
import PostItem from './PostItem';
import * as S from './styled';

const ListPage = observer(() => {
  const { postStore } = useStore();

  const [posts, setPosts] = useState<PostModel[]>([]);
  const [isPostsLoaded, setIsPostsLoaded] = useState<boolean>(false);

  const handleCreateButtonClick = () => {
    postStore.setPageMode('create');
  };

  useEffect(() => {
    async function fetchPosts() {
      await postStore.fetchPosts();

      setPosts(postStore.posts);
      setIsPostsLoaded(true);
    }

    fetchPosts();
  }, []);

  return (
    <S.ListPageWrapper>
      <PostHeader
        title={'게시판'}
        rightElements={
          <Button onClick={handleCreateButtonClick} icon={<S.WriteIcon />}>
            생성
          </Button>
        }
      />

      {isPostsLoaded ? (
        posts.map((post) => (
          <PostItem key={post._id} _id={post._id} title={post.title} userName={post.userName} />
        ))
      ) : (
        <S.LoadingSpinnerWrapper>
          <LoadingSpinner size={72} weight={3} />
        </S.LoadingSpinnerWrapper>
      )}
    </S.ListPageWrapper>
  );
});

export default ListPage;
