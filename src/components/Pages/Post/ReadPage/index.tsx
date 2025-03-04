'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

import usePassword from '@/hooks/usePassword';
import { PostModel } from '@/models/post';
import useStore from '@/stores';
import Button from '@/theme/Button';
import Buttons from '@/theme/Buttons';
import InputBox from '@/theme/InputBox';
import LoadingSpinner from '@/theme/LoadingSpinner';
import Modal from '@/theme/Modal';

import * as S from './styled';

type ReadPageProps = {
  post: PostModel;
};

const ReadPage = observer(({ post }: ReadPageProps) => {
  const { postStore, uiStore } = useStore();
  const router = useRouter();
  const { data: session } = useSession();
  const { decryptPassword } = usePassword();

  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [passwordModalMode, setPasswordModalMode] = useState<'delete' | 'edit' | null>(null);
  const [password, setPassword] = useState<string>('');

  // const handleEditButtonClick = () => {
  //   setPasswordModalMode('edit');
  //   setShowPasswordModal(true);
  //   setPassword('');
  // };

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
          router.push('/post');
          window.scrollTo({ top: 0 });

          uiStore.openToastPopup({ toastString: '게시글이 삭제되었습니다.', toastType: 'success' });
        }
      } else if (passwordModalMode === 'edit') {
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

  return (
    <S.ReadPageWrapper>
      <S.ReadPageHeader>
        <S.BackButtonWrapper href={'/post'}>
          <S.BackButton />
        </S.BackButtonWrapper>
        <S.TitleWrapper>
          {post?.isAdmin && <S.TitleAdminPrefix>[관리자] </S.TitleAdminPrefix>}
          {post?.title}
        </S.TitleWrapper>
      </S.ReadPageHeader>

      {post ? (
        <>
          <S.InfoWrapper>
            <S.Info>
              <S.UserIcon />
              <S.InfoLabel>작성자</S.InfoLabel>
              <S.InfoValue isAdmin={post?.isAdmin}>
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
            {/* {(() => {
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
            })() && <Button onClick={handleEditButtonClick}>수정</Button>} */}
            {(post?.isAdmin ? session : true) && (
              <Button onClick={handleDeleteButtonClick}>삭제</Button>
            )}
          </Buttons>

          {/* <Reply post={post} setPost={setPost} /> */}
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
