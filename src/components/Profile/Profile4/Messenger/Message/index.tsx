import { ReactNode } from 'react';

import * as S from './styled';

type MessageProps = {
  show: boolean;
  isMine?: boolean;
  children?: ReactNode;
};

const Message = ({ show, isMine, children }: MessageProps) => {
  return (
    <S.Message show={show} isMine={isMine ?? false}>
      {isMine ? (
        <S.DefaultProfile />
      ) : (
        <S.YoungWooProfile
          width={40}
          height={40}
          alt={'프로필 이미지'}
          src={'/profile/youngwookim.jpg'}
        />
      )}

      <S.MessageText isMine={isMine ?? false}>{children}</S.MessageText>
    </S.Message>
  );
};

export default Message;
