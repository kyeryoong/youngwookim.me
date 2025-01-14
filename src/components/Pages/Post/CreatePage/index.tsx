import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import usePassword from '@/hooks/usePassword';
import { useStore } from '@/stores';
import Button from '@/theme/Button';
import Buttons from '@/theme/Buttons';
import InputBox from '@/theme/InputBox';

import * as S from './styled';

const TITLE_MAX_LENGTH = 50;
const USER_NAME_MAX_LENGTH = 30;
const CONTENT_MAX_LENGTH = 300;

const CreatePage = observer(() => {
  const { postStore, uiStore } = useStore();
  const { data: session } = useSession();
  const { encryptPassword } = usePassword();

  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    postStore.setTitle(event.currentTarget.value);
  };

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    postStore.setUserName(event.currentTarget.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    postStore.setContent(event.currentTarget.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    postStore.setPassword(event.currentTarget.value);
    setIsValidPassword(
      event.currentTarget.value.length >= 6 && event.currentTarget.value.length <= 16,
    );
  };

  const handleCreateEditButtonClick = async () => {
    if (postStore.pageMode === 'create') {
      const res = await postStore.createPost({
        title: postStore.title,
        userName: postStore.userName,
        createdAt: new Date(),
        content: postStore.content,
        password: session ? null : encryptPassword(postStore.password),
        isAdmin: !!session,
      });

      if (res?.status === 200) {
        postStore.setPageMode('read');
        postStore.setCurrentId(res?._id);
        window.scrollTo({ top: 0 });

        uiStore.openToastPopup({ toastString: '게시글이 작성되었습니다.', toastType: 'success' });
        postStore.clearPost();
      }
    } else if (postStore.pageMode === 'edit') {
      const res = await postStore.editPost({
        _id: postStore.currentId ?? '',
        title: postStore.title,
        userName: postStore.userName,
        content: postStore.content,
        password: session ? null : encryptPassword(postStore.password),
        isAdmin: !!session,
      });

      if (res?.status === 200) {
        postStore.setPageMode('read');
        postStore.setCurrentId(postStore.currentId);
        window.scrollTo({ top: 0 });

        uiStore.openToastPopup({ toastString: '게시글이 수정되었습니다.', toastType: 'success' });
        postStore.clearPost();
      }
    }
  };

  const handleBackButtonClick = () => {
    postStore.setPageMode('list');
  };

  const handleReCaptchaChanged = () => {
    setIsVerified(true);
  };

  const handleReCaptchaExpired = () => {
    setIsVerified(false);
  };

  useEffect(() => {
    history.pushState(null, '', location.href);

    const handleBroswerBackButtonClick = (event: PopStateEvent) => {
      event.preventDefault();
      handleBackButtonClick();
    };

    window.addEventListener('popstate', handleBroswerBackButtonClick);
    return () => window.removeEventListener('popstate', handleBroswerBackButtonClick);
  }, []);

  useEffect(() => {
    if (session) {
      setIsValidPassword(true);
      setIsVerified(true);
    }
  }, []);

  useEffect(() => {
    if (postStore.pageMode === 'create') {
      postStore.clearPost();

      if (session) {
        postStore.setUserName('김영우');
      }
    } else if (postStore.pageMode === 'edit') {
      if (session) {
        setIsValidPassword(true);
      } else {
        setIsValidPassword(postStore.password.length >= 6 && postStore.password.length <= 16);
      }
    }
  }, [postStore.pageMode]);

  return (
    <S.CreatePageWrapper>
      <S.CreatePageHeader>
        <S.BackButton onClick={handleBackButtonClick} />
        {postStore.pageMode === 'create' ? '게시글 작성' : '게시글 수정'}
      </S.CreatePageHeader>

      <InputBox
        type={'text'}
        value={postStore.title}
        onInputChange={handleTitleChange}
        label={'제목'}
        maxLength={TITLE_MAX_LENGTH}
        showCounter
      />

      <InputBox
        type={'text'}
        value={postStore.userName}
        onInputChange={handleUserNameChange}
        label={'이름'}
        maxLength={USER_NAME_MAX_LENGTH}
        showCounter
        disabled={postStore.pageMode === 'edit' || !!session}
      />

      <InputBox
        type={'textarea'}
        value={postStore.content}
        onTextAreaChange={handleContentChange}
        label={'내용'}
        maxLength={session ? undefined : CONTENT_MAX_LENGTH}
        showCounter={!session}
        style={{ height: '200px' }}
      />

      {session ? (
        <>
          <br />
          <br />
          <br />
        </>
      ) : (
        <>
          <InputBox
            type={'password'}
            value={postStore.password}
            onInputChange={handlePasswordChange}
            label={'비밀번호'}
            minLength={6}
            maxLength={16}
            style={{ width: '180px' }}
          />

          <S.PasswordComment>
            {postStore.password.length > 0 &&
              !isValidPassword &&
              '비밀번호는 6~16 자리여야 합니다.'}
          </S.PasswordComment>

          <S.ReCAPTCHAWrapper>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY ?? ''}
              onChange={handleReCaptchaChanged}
              onExpired={handleReCaptchaExpired}
            />
          </S.ReCAPTCHAWrapper>
        </>
      )}

      <Buttons>
        <Button
          onClick={handleCreateEditButtonClick}
          icon={<S.WriteIcon />}
          disabled={
            postStore.title === '' ||
            postStore.userName === '' ||
            postStore.content === '' ||
            !isVerified ||
            !isValidPassword
          }
        >
          {postStore.pageMode === 'create' ? '작성' : '수정'}
        </Button>
      </Buttons>
    </S.CreatePageWrapper>
  );
});

export default CreatePage;
