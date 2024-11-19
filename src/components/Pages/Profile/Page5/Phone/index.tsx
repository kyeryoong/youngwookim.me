import { RefObject } from 'react';

import * as S from './styled';

type PhoneProps = {
  videoSrc: string;
  videoRef: RefObject<HTMLVideoElement>;
};

const Phone = ({ videoSrc, videoRef }: PhoneProps) => {
  return (
    <S.PhoneWrapper>
      <S.PhoneMockup width={450} height={900} src={'/profile/phone.webp'} alt={'Phone'} />
      <S.VideoPlayer src={videoSrc} ref={videoRef} loop muted />
    </S.PhoneWrapper>
  );
};

export default Phone;
