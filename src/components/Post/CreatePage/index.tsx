import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { useStore } from '@/stores';
import BackButton from '@/theme/BackButton';

import Button from '../../../theme/Button';
import PostHeader from '../PostHeader';
import * as S from './styled';

const CreatePage = observer(() => {
  const { postStore } = useStore();

  const [title, setTitle] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [content, setContent] = useState<string>('');

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

  const handleCreateButtonClick = async () => {
    const res = await postStore.createPost({ title, userName, content });

    if (res?.status === 201) {
      postStore.setPageMode('list');
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
      <S.NameInputBox type={'text'} value={title} onChange={handleTitleChange} />

      <S.Label>이름</S.Label>
      <S.NameInputBox type={'text'} value={userName} onChange={handleUserNameChange} />

      <S.Label>내용</S.Label>
      <S.ContentInputBox value={content} onChange={handleContentChange} />

      <Button
        onClick={handleCreateButtonClick}
        icon={<S.WriteIcon />}
        disabled={title === '' || userName === '' || content === '' || !isVerified}
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
