import CryptoJS from 'crypto-js';
import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { useStore } from '@/stores';
import BackButton from '@/theme/BackButton';

import Button from '../../../theme/Button';
import PostHeader from '../PostHeader';
import * as S from './styled';

const CreatePage = observer(() => {
  const { postStore, uiStore } = useStore();

  const TITLE_MAX_LENGTH = 50;
  const USER_NAME_MAX_LENGTH = 30;
  const CONTENT_MAX_LENGTH = 300;

  const [title, setTitle] = useState<string>('');
  const [titleLength, setTitleLength] = useState<number>(0);
  const [userName, setUserName] = useState<string>('');
  const [userNameLength, setUserNameLength] = useState<number>(0);
  const [content, setContent] = useState<string>('');
  const [contentLength, setContentLength] = useState<number>(0);
  const [password, setPassword] = useState<string>('');

  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
    setTitleLength(event.currentTarget.value.length);
  };

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
    setUserNameLength(event.currentTarget.value.length);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
    setContentLength(event.currentTarget.value.length);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    setIsValidPassword(
      event.currentTarget.value.length >= 6 && event.currentTarget.value.length <= 16,
    );
  };

  const handleCreateButtonClick = async () => {
    const res = await postStore.createPost({
      title,
      userName,
      content,
      password: CryptoJS.AES.encrypt(
        password,
        process.env.NEXT_PUBLIC_SECRET_KEY as string,
      ).toString(),
    });

    if (res?.status === 201) {
      postStore.setPageMode('list');
      uiStore.openToastPopup({ toastString: '게시글이 작성되었습니다.', toastType: 'success' });
    }
  };

  const handleBackButtonClick = () => {
    postStore.setPageMode('list');
  };

  const handleReCaptchaChanged = () => {
    setIsVerified(true);
  };

  return (
    <S.CreatePageWrapper>
      <PostHeader
        title={'게시글 작성'}
        leftElements={<BackButton onClick={handleBackButtonClick} />}
      />
      <S.Label>제목</S.Label>
      <S.NameInputBox
        type={'text'}
        value={title}
        onChange={handleTitleChange}
        maxLength={TITLE_MAX_LENGTH}
      />
      <S.TextLength isMaxLength={titleLength === TITLE_MAX_LENGTH}>
        {titleLength} / {TITLE_MAX_LENGTH}
      </S.TextLength>

      <S.Label>이름</S.Label>
      <S.NameInputBox
        type={'text'}
        value={userName}
        onChange={handleUserNameChange}
        maxLength={USER_NAME_MAX_LENGTH}
      />
      <S.TextLength isMaxLength={userNameLength === USER_NAME_MAX_LENGTH}>
        {userNameLength} / {USER_NAME_MAX_LENGTH}
      </S.TextLength>

      <S.Label>내용</S.Label>
      <S.ContentInputBox value={content} onChange={handleContentChange} maxLength={300} />
      <S.TextLength isMaxLength={contentLength === CONTENT_MAX_LENGTH}>
        {contentLength} / {CONTENT_MAX_LENGTH}
      </S.TextLength>

      <S.Label>비밀번호</S.Label>
      <S.PasswordInputBox
        type={'password'}
        value={password}
        onChange={handlePasswordChange}
        minLength={9}
        maxLength={16}
      />
      <S.PasswordComment>
        {password.length > 0 && !isValidPassword && '비밀번호는 6~16 자리여야 합니다.'}
      </S.PasswordComment>

      <Button
        onClick={handleCreateButtonClick}
        icon={<S.WriteIcon />}
        disabled={
          title === '' || userName === '' || content === '' || !isVerified || !isValidPassword
        }
      >
        작성
      </Button>
      <S.ReCAPTCHAWrapper>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY ?? ''}
          onChange={handleReCaptchaChanged}
        />
      </S.ReCAPTCHAWrapper>
    </S.CreatePageWrapper>
  );
});

export default CreatePage;
