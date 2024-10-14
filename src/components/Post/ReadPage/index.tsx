'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';
import LoadingSpinner from '@/theme/LoadingSpinner';

import PostHeader from '../PostHeader';
import * as S from './styled';

const ReadPage = observer(({ id }: { id: string }) => {
  const { postStore } = useStore();
  const router = useRouter();

  const [post, setPost] = useState<PostModel | null>(null);
  const [isPostLoaded, setIsPostLoaded] = useState<boolean>(false);

  const handleBackButtonClick = () => {
    postStore.setPageMode('list');
    postStore.setCurrentId(null);
    router.push('/post');
  };

  useEffect(() => {
    async function fetchPost() {
      if (id) {
        const res = await postStore.fetchPost({ _id: id });

        if (res) {
          setPost(res.data);
          setIsPostLoaded(true);
        }
      }
    }

    fetchPost();
  }, [postStore.currentId]);

  return (
    <S.ReadPageWrapper>
      <PostHeader
        title={post?.title ?? ''}
        leftElements={<S.BackButton onClick={handleBackButtonClick} />}
      />

      {isPostLoaded ? (
        <>
          <S.LabelWrapper>
            <S.Label>작성자</S.Label>
            <S.UserName>{post?.userName}</S.UserName>
          </S.LabelWrapper>

          <S.Content>{post?.content}</S.Content>
        </>
      ) : (
        <S.LoadingSpinnerWrapper>
          <LoadingSpinner size={72} weight={3} />
        </S.LoadingSpinnerWrapper>
      )}
    </S.ReadPageWrapper>
  );
});

export default ReadPage;
