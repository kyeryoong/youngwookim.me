import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';
import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import { PostModel, ReplyCreateModel, ReplyModel } from '@/models/post';
import { useStore } from '@/stores';
import Button from '@/theme/Button';
import Buttons from '@/theme/Buttons';
import InputBox from '@/theme/InputBox';
import Modal from '@/theme/Modal';
import { decryptPassword, encryptPassword } from '@/utils/password';

import * as S from './styled';

type ReplyProps = {
  post: PostModel | null;
  setPost: Dispatch<SetStateAction<PostModel | null>>;
};

const USER_NAME_MAX_LENGTH = 30;
const CONTENT_MAX_LENGTH = 100;

const Reply = observer(({ post, setPost }: ReplyProps) => {
  const { postStore, uiStore } = useStore();
  const { data: session } = useSession();

  const replyInputRef = useRef<HTMLDivElement>(null);
  const [isReplyInputFocused, setIsReplyInputFocused] = useState<boolean>(false);

  const [replyUserName, setReplyUserName] = useState<string>('');
  const [replyContent, setReplyContent] = useState<string>('');
  const [replyPassword, setReplyPassword] = useState<string>('');

  const [isValidPassword, setIsValidPassword] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const [deleteReply, setDeleteReply] = useState<ReplyModel | null>(null);

  const handleReplyInputInsideClick = useCallback(() => {
    setIsReplyInputFocused(true);
  }, []);

  const handleReplyInputOutsideClick = useCallback((event: MouseEvent) => {
    if (replyInputRef.current && !replyInputRef.current.contains(event.target as Node)) {
      setIsReplyInputFocused(false);
    }
  }, []);

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

  const handleReCaptchaChanged = useCallback(() => {
    setIsVerified(true);
  }, []);

  const handleReCaptchaExpired = useCallback(() => {
    setIsVerified(false);
  }, []);

  const handleCreateReplyButtonClick = async () => {
    const replyBody: ReplyCreateModel = {
      _id: postStore.currentId ?? '',
      userName: replyUserName,
      createdAt: new Date(),
      content: replyContent,
      password: session ? null : encryptPassword(replyPassword),
      isAdmin: !!session,
    };

    const res = await postStore.createReply(replyBody);

    if (res?.status === 200) {
      const newReplies = [
        ...(post?.replies || []),
        { ...replyBody, replyId: res.replyId, isDeleted: false },
      ];

      const newPost = { ...post!, replies: newReplies };

      setPost(newPost);

      setReplyUserName('');
      setReplyContent('');
      setReplyPassword('');
      setIsReplyInputFocused(false);
    }
  };

  const handlePasswordModalConfirmButtonClick = async () => {
    const isPasswordCorrect =
      decryptPassword(deleteReply?.password ?? '') === password || !!session;

    if (isPasswordCorrect && post?._id && deleteReply?.replyId) {
      const res = await postStore.deleteReply({ _id: post?._id, replyId: deleteReply.replyId });

      if (res?.status === 200) {
        const newReplies = post.replies.map((reply) => {
          if (reply.replyId === deleteReply.replyId) {
            return { ...reply, isDeleted: true };
          } else {
            return reply;
          }
        });

        const newPost = { ...post, replies: newReplies };

        setPost(newPost);

        uiStore.openToastPopup({ toastString: '댓글이 삭제되었습니다.', toastType: 'success' });
        setShowPasswordModal(false);
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
    document.addEventListener('mousedown', handleReplyInputOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleReplyInputOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (session) {
      setReplyUserName('김영우');
      setIsValidPassword(true);
      setIsVerified(true);
    }
  }, []);

  useEffect(() => {
    if (!isReplyInputFocused) {
      if (session) {
        setIsVerified(true);
      } else {
        setIsVerified(false);
      }
    }
  }, [isReplyInputFocused]);

  return (
    <S.ReplyWrapper>
      <S.ReplyTitle>
        <S.ReplyTitleLabel>댓글</S.ReplyTitleLabel>
        <S.ReplyTitleValue>{post?.replies?.length}개</S.ReplyTitleValue>
      </S.ReplyTitle>

      {post && post?.replies?.length > 0 && (
        <S.RepliesWrapper>
          {post?.replies?.map((reply: ReplyModel, index: number) => (
            <S.ReplyItem key={index}>
              <S.ReplyItemHeader>
                <S.ReplyUserName isAdmin={reply.isAdmin}>
                  {reply.userName}
                  {reply.isAdmin && '(관리자)'}
                </S.ReplyUserName>

                <S.ReplyCreatedAt>
                  {new Date(reply.createdAt ?? '').toLocaleString('ko-KR', {
                    timeZone: 'Asia/Seoul',
                  })}
                </S.ReplyCreatedAt>

                {!reply.isDeleted && (reply.isAdmin ? session : true) && (
                  <S.DeleteReplyButton
                    onClick={() => {
                      setShowPasswordModal(true);
                      setDeleteReply(reply);
                    }}
                  >
                    삭제
                  </S.DeleteReplyButton>
                )}
              </S.ReplyItemHeader>

              <S.ReplyContent isDeleted={reply.isDeleted}>
                {reply.isDeleted ? '삭제된 댓글입니다.' : reply.content}
              </S.ReplyContent>
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
              spellCheck={false}
              placeholder={'이름'}
              disabled={!!session}
            />

            <S.ReplyContentInputBox
              value={replyContent}
              onChange={handleReplyContentChange}
              maxLength={CONTENT_MAX_LENGTH}
              spellCheck={false}
              placeholder={'내용'}
            />

            {!session && (
              <>
                <S.ReplyInputBox
                  type={'password'}
                  value={replyPassword}
                  onChange={handleReplyPasswordChange}
                  minLength={6}
                  maxLength={16}
                  spellCheck={false}
                  placeholder={'비밀번호'}
                  style={{ width: '180px' }}
                />
                <S.PasswordComment
                  isValidPassword={!(replyPassword.length > 0 && !isValidPassword)}
                >
                  {replyPassword.length > 0 &&
                    !isValidPassword &&
                    '비밀번호는 6~16 자리여야 합니다.'}
                </S.PasswordComment>
              </>
            )}

            <S.ReplyButtonWrapper>
              <S.CreateReplyButton
                onClick={handleCreateReplyButtonClick}
                disabled={
                  replyUserName === '' || replyContent === '' || !isVerified || !isValidPassword
                }
              >
                댓글 작성
              </S.CreateReplyButton>
            </S.ReplyButtonWrapper>
          </>
        ) : (
          <>댓글 작성하기</>
        )}
      </S.ReplyInputWrapper>

      {isReplyInputFocused && !session && (
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY ?? ''}
          onChange={handleReCaptchaChanged}
          onExpired={handleReCaptchaExpired}
        />
      )}

      <Modal
        isOpened={showPasswordModal}
        title={session ? '관리자 삭제' : '비밀번호 입력'}
        text={session ? '댓글을 삭제하시겠습니까?' : '게시글을 삭제하려면 비밀번호를 입력하세요.'}
        onBackgroundClick={handleModalBackgroundClick}
      >
        <S.ModalForm onSubmit={handlePasswordModalEnter}>
          {session ? (
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
              type={'warning'}
              disabled={!session && !password}
            >
              삭제
            </Button>
            <Button onClick={handlePasswordModalCancelButtonClick} type={'secondary'}>
              취소
            </Button>
          </Buttons>{' '}
        </S.ModalForm>
      </Modal>
    </S.ReplyWrapper>
  );
});

export default Reply;
