'use client';

import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

import { PostModel } from '@/models/post';
import { useStore } from '@/stores';
import Button from '@/theme/Button';
import Buttons from '@/theme/Buttons';
import IconButton from '@/theme/IconButton';
import InputBox from '@/theme/InputBox';
import LoadingSpinner from '@/theme/LoadingSpinner';
import Modal from '@/theme/Modal';
import { decryptPassword } from '@/utils/password';

import PostHeader from '../PostHeader';
import Reply from './Reply';
import * as S from './styled';

const ReadPage = observer(() => {
  const { postStore, uiStore } = useStore();
  const { data: session } = useSession();

  const [post, setPost] = useState<PostModel | null>(null);
  const [isPostLoaded, setIsPostLoaded] = useState<boolean>(false);

  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [passwordModalMode, setPasswordModalMode] = useState<'delete' | 'edit' | null>(null);
  const [password, setPassword] = useState<string>('');

  const handleBackButtonClick = () => {
    postStore.setPageMode('list');
    postStore.setCurrentId(null);
  };

  const handleEditButtonClick = () => {
    setPasswordModalMode('edit');
    setShowPasswordModal(true);
    setPassword('');
  };

  const handleDeleteButtonClick = () => {
    setPasswordModalMode('delete');
    setShowPasswordModal(true);
    setPassword('');
  };

  const handlePasswordModalConfirmButtonClick = async () => {
    const isPasswordCorrect = decryptPassword(post?.password ?? '') === password || !!session;

    if (isPasswordCorrect && post?._id) {
      if (passwordModalMode === 'delete') {
        const res = await postStore.deletePost({ _id: post?._id });

        if (res?.status === 200) {
          postStore.setPageMode('list');
          window.scrollTo({ top: 0 });

          uiStore.openToastPopup({ toastString: '게시글이 삭제되었습니다.', toastType: 'success' });
        }
      } else if (passwordModalMode === 'edit') {
        postStore.setPageMode('edit');

        postStore.setCurrentId(post._id);
        postStore.setTitle(post.title);
        postStore.setUserName(post.userName);
        postStore.setContent(post.content);
        postStore.setPassword(decryptPassword(post.password ?? ''));
      }
    } else {
      uiStore.openToastPopup({ toastString: '비밀번호가 틀렸습니다.', toastType: 'error' });
    }
  };

  const handlePasswordModalCancelButtonClick = () => {
    setShowPasswordModal(false);
    setPassword('');
  };

  const handlePasswordModalEnter = (event: KeyboardEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handleModalBackgroundClick = () => {
    setShowPasswordModal(false);
    setPassword('');
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (postStore.currentId) {
        const res = await postStore.fetchPost({ _id: postStore.currentId });

        if (res) {
          setPost(res.data);
          setIsPostLoaded(true);
        }
      }
    };

    fetchPost();
  }, []);

  useEffect(() => {
    history.pushState(null, '', location.href);

    const handleBroswerBackButtonClick = (event: PopStateEvent) => {
      event.preventDefault();
      handleBackButtonClick();
    };

    window.addEventListener('popstate', handleBroswerBackButtonClick);
    return () => window.removeEventListener('popstate', handleBroswerBackButtonClick);
  }, []);

  return (
    <S.ReadPageWrapper>
      <PostHeader
        title={
          <>
            {post?.isAdmin && <S.PostTitleAdminPrefix>[관리자] </S.PostTitleAdminPrefix>}
            {post?.title}
          </>
        }
        leftElements={
          <IconButton
            type={'left'}
            size={32}
            onClick={handleBackButtonClick}
            style={{ marginLeft: 'calc(-1 * min(1vw, 8px))' }}
          />
        }
      />

      {isPostLoaded ? (
        <>
          <S.InfoWrapper>
            <S.Info>
              <S.UserIcon />
              <S.InfoLabel>작성자</S.InfoLabel>
              <S.InfoValue isAdmin>
                {post?.userName}
                {post?.isAdmin && '(관리자)'}
              </S.InfoValue>
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

          <Buttons>
            {(() => {
              if (session) {
                if (post?.isAdmin) {
                  return true;
                }
              } else {
                if (post?.isAdmin) {
                  return false;
                } else {
                  return true;
                }
              }
            })() && <Button onClick={handleEditButtonClick}>수정</Button>}
            {(post?.isAdmin ? session : true) && (
              <Button onClick={handleDeleteButtonClick}>삭제</Button>
            )}
          </Buttons>

          <Reply post={post} setPost={setPost} />
        </>
      ) : (
        <S.LoadingSpinnerWrapper>
          <LoadingSpinner size={72} weight={3} />
        </S.LoadingSpinnerWrapper>
      )}

      <Modal
        isOpened={showPasswordModal}
        title={
          post?.isAdmin || !!session
            ? passwordModalMode === 'delete'
              ? '관리자 삭제'
              : '관리자 수정'
            : '비밀번호 입력'
        }
        text={
          post?.isAdmin || !!session
            ? `게시글을 ${passwordModalMode === 'delete' ? '삭제' : '수정'}하시겠습니까?`
            : `게시글을 ${
                passwordModalMode === 'delete' ? '삭제' : '수정'
              }하려면 비밀번호를 입력하세요.`
        }
        onBackgroundClick={handleModalBackgroundClick}
      >
        <S.ModalForm onSubmit={handlePasswordModalEnter}>
          {post?.isAdmin || !!session ? (
            <br />
          ) : (
            <InputBox
              type={'password'}
              value={password}
              onInputChange={handlePasswordChange}
              style={{ marginTop: '16px', marginBottom: '16px' }}
            />
          )}

          <Buttons>
            <Button
              onClick={handlePasswordModalConfirmButtonClick}
              type={passwordModalMode === 'delete' ? 'warning' : 'secondary'}
              disabled={!session && !password}
            >
              {passwordModalMode === 'delete' ? '삭제' : '확인'}
            </Button>
            <Button onClick={handlePasswordModalCancelButtonClick} type={'secondary'}>
              취소
            </Button>
          </Buttons>
        </S.ModalForm>
      </Modal>
    </S.ReadPageWrapper>
  );
});

export default ReadPage;
