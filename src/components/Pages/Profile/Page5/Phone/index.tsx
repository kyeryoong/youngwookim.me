import * as S from './styled';

type PhoneProps = {
  videoSrc: string;
};

const Phone = ({ videoSrc }: PhoneProps) => {
  return (
    <S.PhoneWrapper>
      <S.PhoneMockup width={0} height={0} sizes={'100%'} src={'/profile/phone.png'} alt={'Phone'} />
      <S.VideoPlayer src={videoSrc} autoPlay loop muted />
    </S.PhoneWrapper>
  );
};

export default Phone;
