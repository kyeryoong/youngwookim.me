import { observer } from 'mobx-react-lite';
import { ChangeEvent, useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { useStore } from '@/stores';
import Button from '@/theme/Button';
import Buttons from '@/theme/Buttons';
import IconButton from '@/theme/IconButton';
import InputBox from '@/theme/InputBox';
import { encryptPassword } from '@/utils/password';

import PostHeader from '../PostHeader';
import * as S from './styled';

const CreatePage = observer(() => {
  const { postStore, uiStore } = useStore();

  const TITLE_MAX_LENGTH = 50;
  const USER_NAME_MAX_LENGTH = 30;
  const CONTENT_MAX_LENGTH = 300;

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
        content: postStore.content,
        password: encryptPassword(postStore.password),
      });

      if (res?.status === 201) {
        postStore.setPageMode('list');
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
        password: encryptPassword(postStore.password),
      });

      if (res?.status === 201) {
        postStore.setPageMode('list');
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
    if (postStore.pageMode === 'create') {
      postStore.clearPost();
    } else if (postStore.pageMode === 'edit') {
      setIsValidPassword(postStore.password.length >= 6 && postStore.password.length <= 16);
    }
  }, [postStore.pageMode]);

  return (
    <S.CreatePageWrapper>
      <PostHeader
        title={postStore.pageMode === 'create' ? '게시글 작성' : '게시글 수정'}
        leftElements={
          <IconButton
            type={'left'}
            size={32}
            onClick={handleBackButtonClick}
            style={{ marginLeft: 'calc(-1 * min(1vw, 8px))' }}
          />
        }
      />

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
        disabled={postStore.pageMode === 'edit'}
      />

      <InputBox
        type={'textarea'}
        value={postStore.content}
        onTextAreaChange={handleContentChange}
        label={'내용'}
        maxLength={CONTENT_MAX_LENGTH}
        showCounter
        style={{ height: '200px' }}
      />

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
        {postStore.password.length > 0 && !isValidPassword && '비밀번호는 6~16 자리여야 합니다.'}
      </S.PasswordComment>

      <S.ReCAPTCHAWrapper>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY ?? ''}
          onChange={handleReCaptchaChanged}
          onExpired={handleReCaptchaExpired}
        />
      </S.ReCAPTCHAWrapper>

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
