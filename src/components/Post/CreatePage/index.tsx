import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { useStore } from '@/stores';
import BackButton from '@/theme/BackButton';
import Buttons from '@/theme/Buttons';
import InputBox from '@/theme/InputBox';
import { encryptPassword } from '@/utils/password';

import Button from '../../../theme/Button';
import PostHeader from '../PostHeader';
import * as S from './styled';

const CreatePage = observer(() => {
  const { postStore, uiStore } = useStore();

  const TITLE_MAX_LENGTH = 50;
  const USER_NAME_MAX_LENGTH = 30;
  const CONTENT_MAX_LENGTH = 300;

  const [title, setTitle] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
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
      password: encryptPassword(password),
    });

    if (res?.status === 201) {
      postStore.setPageMode('list');
      window.scrollTo({ top: 0 });

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

      <InputBox
        type={'text'}
        value={title}
        onInputChange={handleTitleChange}
        label={'제목'}
        maxLength={TITLE_MAX_LENGTH}
        showCounter
      />

      <InputBox
        type={'text'}
        value={userName}
        onInputChange={handleUserNameChange}
        label={'이름'}
        maxLength={USER_NAME_MAX_LENGTH}
        showCounter
      />

      <InputBox
        type={'textarea'}
        value={content}
        onTextAreaChange={handleContentChange}
        label={'내용'}
        maxLength={CONTENT_MAX_LENGTH}
        showCounter
        style={{ height: '200px' }}
      />

      <InputBox
        type={'password'}
        value={password}
        onInputChange={handlePasswordChange}
        label={'비밀번호'}
        minLength={6}
        maxLength={16}
        style={{ width: '180px' }}
      />

      <S.PasswordComment>
        {password.length > 0 && !isValidPassword && '비밀번호는 6~16 자리여야 합니다.'}
      </S.PasswordComment>

      <S.ReCAPTCHAWrapper>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY ?? ''}
          onChange={handleReCaptchaChanged}
        />
      </S.ReCAPTCHAWrapper>

      <Buttons>
        <Button
          onClick={handleCreateButtonClick}
          icon={<S.WriteIcon />}
          disabled={
            title === '' || userName === '' || content === '' || !isVerified || !isValidPassword
          }
        >
          작성
        </Button>
      </Buttons>
    </S.CreatePageWrapper>
  );
});

export default CreatePage;
