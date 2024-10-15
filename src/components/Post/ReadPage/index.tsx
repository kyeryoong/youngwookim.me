'use client';

import CryptoJS from 'crypto-js';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';
import BackButton from '@/theme/BackButton';
import Button from '@/theme/Button';
import LoadingSpinner from '@/theme/LoadingSpinner';
import Modal from '@/theme/Modal';

import PostHeader from '../PostHeader';
import * as S from './styled';

const ReadPage = observer(() => {
  const { postStore, uiStore } = useStore();

  const [post, setPost] = useState<PostModel | null>(null);
  const [isPostLoaded, setIsPostLoaded] = useState<boolean>(false);

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleBackButtonClick = () => {
    postStore.setPageMode('list');
    postStore.setCurrentId(null);
  };

  const handleDeleteButtonClick = () => {
    setShowDeleteModal(true);
    setPassword('');
  };

  const handleDeleteModalConfirmButtonClick = async () => {
    const isPasswordCorrect =
      CryptoJS.AES.decrypt(
        post?.password as string,
        process.env.NEXT_PUBLIC_SECRET_KEY as string,
      ).toString(CryptoJS.enc.Utf8) === password;
    if (isPasswordCorrect && post?._id) {
      const res = await postStore.deletePost({ _id: post?._id });
      if (res?.status === 201) {
        postStore.setPageMode('list');
        uiStore.openToastPopup({ toastString: '게시글이 삭제되었습니다.', toastType: 'success' });
      }
    } else {
      uiStore.openToastPopup({ toastString: '비밀번호가 틀렸습니다.', toastType: 'error' });
    }
  };

  const handleDeleteModalCancelButtonClick = () => {
    setShowDeleteModal(false);
    setPassword('');
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
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

          <Button onClick={handleDeleteButtonClick}>삭제</Button>
        </>
      ) : (
        <S.LoadingSpinnerWrapper>
          <LoadingSpinner size={72} weight={3} />
        </S.LoadingSpinnerWrapper>
      )}

      <Modal isOpen={showDeleteModal}>
        <S.DeleteModalText>게시글을 삭제하려면 비밀번호를 입력하세요.</S.DeleteModalText>

        <S.PasswordInputBox type={'password'} value={password} onChange={handlePasswordChange} />

        <S.DeleteModalButtons>
          <Button onClick={handleDeleteModalConfirmButtonClick}>삭제</Button>
          <Button onClick={handleDeleteModalCancelButtonClick}>취소</Button>
        </S.DeleteModalButtons>
      </Modal>
    </S.ReadPageWrapper>
  );
});

export default ReadPage;
