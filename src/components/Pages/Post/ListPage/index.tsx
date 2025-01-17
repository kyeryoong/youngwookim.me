'use client';

import Link from 'next/link';

import { PostModel } from '@/models/post';
import Button from '@/theme/Button';

import PostItem from './PostItem';
import * as S from './styled';

type ListPageProps = {
  posts: PostModel[];
};

const ListPage = ({ posts }: ListPageProps) => {
  return (
    <S.ListPageWrapper>
      <S.ListPageHeader>
        게시판
        <Link href={'/post/create'}>
          <Button icon={<S.WriteIcon />}>생성</Button>
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
        <S.LoadingSpinnerWrapper>게시판에 글이 없습니다.</S.LoadingSpinnerWrapper>
      )}
    </S.ListPageWrapper>
  );
};

export default ListPage;
