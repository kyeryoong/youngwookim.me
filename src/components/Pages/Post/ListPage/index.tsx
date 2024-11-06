import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';
import Button from '@/theme/Button';
import LoadingSpinner from '@/theme/LoadingSpinner';

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
    const fetchPosts = async () => {
      await postStore.fetchPosts();

      setPosts(postStore.posts);
      setIsPostsLoaded(true);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleBroswerBackButtonClick = (event: PopStateEvent) => {
      event.preventDefault();
      history.back();
    };

    window.addEventListener('popstate', handleBroswerBackButtonClick);
    return () => window.removeEventListener('popstate', handleBroswerBackButtonClick);
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
        posts.length > 0 ? (
          posts.map((post, index) => (
            <PostItem
              key={post._id}
              _id={post._id}
              index={posts.length - index}
              title={post.title}
              userName={post.userName}
              createdAt={post.createdAt}
            />
          ))
        ) : (
          <S.LoadingSpinnerWrapper>게시판에 글이 없습니다.</S.LoadingSpinnerWrapper>
        )
      ) : (
        <S.LoadingSpinnerWrapper>
          <LoadingSpinner size={72} weight={3} />
        </S.LoadingSpinnerWrapper>
      )}
    </S.ListPageWrapper>
  );
});

export default ListPage;
