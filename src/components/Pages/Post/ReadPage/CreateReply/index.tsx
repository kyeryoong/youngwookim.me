import { observer } from 'mobx-react-lite';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { PostModel, ReplyModel } from '@/models/post';
import { useStore } from '@/stores';
import { encryptPassword } from '@/utils/password';

import * as S from './styled';

type CreateReplyProps = {
  post: PostModel | null;
  setPost: Dispatch<SetStateAction<PostModel | null>>;
};

const USER_NAME_MAX_LENGTH = 30;
const CONTENT_MAX_LENGTH = 100;

const CreateReply = observer(({ post, setPost }: CreateReplyProps) => {
  const { postStore } = useStore();

  const replyInputRef = useRef<HTMLDivElement>(null);
  const [isReplyInputFocused, setIsReplyInputFocused] = useState<boolean>(false);

  const [replyUserName, setReplyUserName] = useState<string>('');
  const [replyContent, setReplyContent] = useState<string>('');
  const [replyPassword, setReplyPassword] = useState<string>('');

  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);

  const handleReplyInputInsideClick = () => {
    setIsReplyInputFocused(true);
  };

  const handleReplyInputOutsideClick = (event: MouseEvent) => {
    if (replyInputRef.current && !replyInputRef.current.contains(event.target as Node)) {
      setIsReplyInputFocused(false);
    }
  };

  const handleReplyUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReplyUserName(event.currentTarget.value);
  };

  const handleReplyContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReplyContent(event.currentTarget.value);
  };

  const handleReplyPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReplyPassword(event.currentTarget.value);
    setIsValidPassword(
      event.currentTarget.value.length >= 6 && event.currentTarget.value.length <= 16,
    );
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleReplyInputOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleReplyInputOutsideClick);
    };
  }, []);

  const handleCreateReply = async () => {
    const replyBody: ReplyModel = {
      _id: postStore.currentId ?? '',
      userName: replyUserName,
      createdAt: new Date(),
      content: replyContent,
      password: encryptPassword(replyPassword),
      isAdmin: false,
    };

    const res = await postStore.createReply(replyBody);

    if (res?.status === 200) {
      const newReplies: ReplyModel[] = [...(post?.replies || []), replyBody];

      const newPost = { ...post!, replies: newReplies };

      setPost(newPost);

      setReplyUserName('');
      setReplyContent('');
      setReplyPassword('');
      setIsReplyInputFocused(false);
    }
  };

  return (
    <S.CreateReplyWrapper>
      <S.ReplyTitle>댓글 {post?.replies?.length}개</S.ReplyTitle>

      {post && post?.replies?.length > 0 && (
        <S.RepliesWrapper>
          {post?.replies?.map((reply: ReplyModel, index: number) => (
            <S.ReplyItem key={index}>
              <S.ReplyItemHeader>
                <S.ReplyUserName>{reply.userName}</S.ReplyUserName>
                <S.ReplyCreatedAt>
                  {new Date(reply.createdAt ?? '').toLocaleString('ko-KR', {
                    timeZone: 'Asia/Seoul',
                  })}
                </S.ReplyCreatedAt>
              </S.ReplyItemHeader>

              <S.ReplyContent>{reply.content}</S.ReplyContent>
            </S.ReplyItem>
          ))}
        </S.RepliesWrapper>
      )}

      <S.ReplyInputWrapper
        ref={replyInputRef}
        onClick={handleReplyInputInsideClick}
        isFocused={isReplyInputFocused}
      >
        {isReplyInputFocused ? (
          <>
            <S.ReplyInputBox
              type={'text'}
              value={replyUserName}
              onChange={handleReplyUserNameChange}
              maxLength={USER_NAME_MAX_LENGTH}
              placeholder={'이름'}
            />
            <S.ReplyContentInputBox
              value={replyContent}
              onChange={handleReplyContentChange}
              maxLength={CONTENT_MAX_LENGTH}
              placeholder={'내용'}
            />

            <S.ReplyInputBox
              type={'password'}
              value={replyPassword}
              onChange={handleReplyPasswordChange}
              minLength={6}
              maxLength={16}
              placeholder={'비밀번호'}
              style={{ width: '180px' }}
            />

            <S.PasswordComment isValidPassword={!(replyPassword.length > 0 && !isValidPassword)}>
              {replyPassword.length > 0 && !isValidPassword && '비밀번호는 6~16 자리여야 합니다.'}
            </S.PasswordComment>

            <S.ReplyButtonWrapper>
              <S.ReplyButton
                onClick={handleCreateReply}
                disabled={replyUserName === '' || replyContent === '' || !isValidPassword}
              >
                댓글 작성
              </S.ReplyButton>
            </S.ReplyButtonWrapper>
          </>
        ) : (
          <>댓글 작성하기</>
        )}
      </S.ReplyInputWrapper>
    </S.CreateReplyWrapper>
  );
});

export default CreateReply;
