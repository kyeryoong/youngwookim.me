'use client';

import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { ChangeEvent, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import usePassword from '@/hooks/usePassword';
import useStore from '@/stores';
import Button from '@/theme/Button';
import Buttons from '@/theme/Buttons';
import InputBox from '@/theme/InputBox';

import * as S from './styled';

type CreatePageProps = {
  mode: 'create' | 'edit';
};

const TITLE_MAX_LENGTH = 50;
const USER_NAME_MAX_LENGTH = 30;
const CONTENT_MAX_LENGTH = 300;

const CreatePage = observer(({ mode }: CreatePageProps) => {
  const { postStore, uiStore } = useStore();
  const router = useRouter();
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
    if (mode === 'create') {
      const res = await postStore.createPost({
        title: postStore.title,
        userName: postStore.userName,
        createdAt: new Date(),
        content: postStore.content,
        password: session ? null : encryptPassword(postStore.password),
        isAdmin: !!session,
      });

      if (res?.status === 200) {
        router.push(`/post/read/${res?._id}`);
        window.scrollTo({ top: 0 });

        uiStore.openToastPopup({ toastString: '게시글이 작성되었습니다.', toastType: 'success' });
      }
    } else if (mode === 'edit') {
      const res = await postStore.editPost({
        _id: '',
        title: postStore.title,
        userName: postStore.userName,
        content: postStore.content,
        password: session ? null : encryptPassword(postStore.password),
        isAdmin: !!session,
      });

      if (res?.status === 200) {
        window.scrollTo({ top: 0 });

        uiStore.openToastPopup({ toastString: '게시글이 수정되었습니다.', toastType: 'success' });
        postStore.clearPost();
      }
    }
  };

  const handleReCaptchaChanged = () => {
    setIsVerified(true);
  };

  const handleReCaptchaExpired = () => {
    setIsVerified(false);
  };

  useEffect(() => {
    if (session) {
      setIsValidPassword(true);
      setIsVerified(true);
    }
  }, []);

  useEffect(() => {
    if (mode === 'create') {
      postStore.clearPost();

      if (session) {
        postStore.setUserName('김영우');
      }
    } else if (mode === 'edit') {
      if (session) {
        setIsValidPassword(true);
      } else {
        setIsValidPassword(postStore.password.length >= 6 && postStore.password.length <= 16);
      }
    }
  }, [mode]);

  return (
    <S.CreatePageWrapper>
      <S.CreatePageHeader>
        <S.BackButtonWrapper href={'/post'}>
          <S.BackButton />
        </S.BackButtonWrapper>
        <S.TitleWrapper>{mode === 'create' ? '게시글 작성' : '게시글 수정'}</S.TitleWrapper>
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
        disabled={mode === 'edit' || !!session}
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
          {mode === 'create' ? '작성' : '수정'}
        </Button>
      </Buttons>
    </S.CreatePageWrapper>
  );
});

export default CreatePage;
