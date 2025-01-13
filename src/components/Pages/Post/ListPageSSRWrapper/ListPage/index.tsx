'use client';

import Link from 'next/link';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';
import Button from '@/theme/Button';
import LoadingSpinner from '@/theme/LoadingSpinner';
import Page from '@/theme/Page';

import PostItem from './PostItem';
import * as S from './styled';

const ListPage = ({ posts }: { posts: PostModel[] }) => {
  const { postStore } = useStore();

  const handleCreateButtonClick = () => {
    postStore.setPageMode('create');
  };

  return (
    <Page>
      <S.ListPageWrapper>
        <S.ListPageHeader>
          게시판
          <Link href={'/post/create'}>
            <Button onClick={handleCreateButtonClick} icon={<S.WriteIcon />}>
              생성
            </Button>
          </Link>
        </S.ListPageHeader>

        {posts?.length > 0 ? (
          posts.map((post, index) => (
            <PostItem
              key={post._id}
              _id={post._id}
              index={posts.length - index}
              title={post.title}
              userName={post.userName}
              createdAt={post.createdAt}
              isAdmin={post.isAdmin}
              repliesLength={post.replies.length}
            />
          ))
        ) : (
          <S.LoadingSpinnerWrapper>
            <LoadingSpinner size={72} weight={3} />
          </S.LoadingSpinnerWrapper>
        )}
      </S.ListPageWrapper>
    </Page>
  );
};

export default ListPage;
