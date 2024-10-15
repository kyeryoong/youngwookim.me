'use client';

import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';
import BackButton from '@/theme/BackButton';
import LoadingSpinner from '@/theme/LoadingSpinner';

import PostHeader from '../PostHeader';
import * as S from './styled';

const ReadPage = observer(() => {
  const { postStore } = useStore();

  const [post, setPost] = useState<PostModel | null>(null);
  const [isPostLoaded, setIsPostLoaded] = useState<boolean>(false);

  const handleBackButtonClick = () => {
    postStore.setPageMode('list');
    postStore.setCurrentId(null);
  };

  useEffect(() => {
    async function fetchPost() {
      if (postStore.currentId) {
        const res = await postStore.fetchPost({ _id: postStore.currentId });

        if (res) {
          setPost(res.data);
          setIsPostLoaded(true);
        }
      }
    }

    fetchPost();
  }, []);

  return (
    <S.ReadPageWrapper>
      <PostHeader
        title={post?.title ?? ''}
        leftElements={<BackButton onClick={handleBackButtonClick} />}
      />

      {isPostLoaded ? (
        <>
          <S.InfoWrapper>
            <S.Info>
              <S.UserIcon />
              <S.InfoLabel>작성자</S.InfoLabel>
              <S.InfoValue>{post?.userName}</S.InfoValue>
            </S.Info>

            <S.Info>
              <S.TimeIcon />
              <S.InfoLabel>작성 시간</S.InfoLabel>
              <S.InfoValue>
                {new Date(post?.createdAt ?? '').toLocaleString('ko-KR', {
                  timeZone: 'Asia/Seoul',
                })}
              </S.InfoValue>
            </S.Info>
          </S.InfoWrapper>

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
