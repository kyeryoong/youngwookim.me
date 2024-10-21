import * as S from './styled';

type MessengerProps = {
  progress: number;
};

const Messenger = ({ progress }: MessengerProps) => {
  return (
    <S.MessengerWrapper>
      <S.Header>
        <S.HeaderName>김영우</S.HeaderName>
        <S.HeaderLabel>
          현재 대화중 <S.HeaderIndicator />
        </S.HeaderLabel>
      </S.Header>

      <S.Messages>
        <S.Message show={progress > 10} isMine={true}>
          <S.MessageText isMine={true}>프론트 엔드 개발자가 된 이유?</S.MessageText>
        </S.Message>
        <S.Message show={progress > 15} isMine={false}>
          <S.MessageProfile
            width={40}
            height={40}
            alt={'프로필 이미지'}
            src={'/profile/youngwookim.jpg'}
          />
          <S.MessageText isMine={false}>
            사용자가 보는 화면을 개발하고 싶었습니다. 특히 코드로 작성된 결과물을 직접 눈으로 볼 수
            있다는점에서 매력을 느끼게 되었습니다.
          </S.MessageText>
        </S.Message>

        <S.Message show={progress > 30} isMine={true}>
          <S.MessageText isMine={true}>
            프론트 엔드 개발자로서 중요하게 생각하는 것은?
          </S.MessageText>
        </S.Message>

        <S.Message show={progress > 35} isMine={false}>
          <S.MessageProfile
            width={40}
            height={40}
            alt={'프로필 이미지'}
            src={'/profile/youngwookim.jpg'}
          />
          <S.MessageText isMine={false}>
            요구사항에 맞게 기능과 디자인을 화면에 정확하게 구현하는 것이 가장 중요하다고
            생각합니다.
          </S.MessageText>
        </S.Message>

        <S.Message show={progress > 50} isMine={true}>
          <S.MessageText isMine={true}>프론트 엔드 개발자로서 가장 어려웠던 점은?</S.MessageText>
        </S.Message>

        <S.Message show={progress > 55} isMine={false}>
          <S.MessageProfile
            width={40}
            height={40}
            alt={'프로필 이미지'}
            src={'/profile/youngwookim.jpg'}
          />
          <S.MessageText isMine={false}>
            쉴 새 없이 바뀌는 등장하는 라이브러리와 프레임워크로 인해 빠르게 변화하는 프론트엔드
            개발 생태계에 적응하는 것이 가장 어렵습니다.
          </S.MessageText>
        </S.Message>

        <S.Message show={progress > 80} isMine={false}>
          <S.MessageProfile
            width={40}
            height={40}
            alt={'프로필 이미지'}
            src={'/profile/youngwookim.jpg'}
          />
          <S.MessageText isMine={false}>
            궁금하점이 더 있으신가요? 게시판에 글을 남겨주시면 답변을 달아드립니다!
            <br />
            <S.BoardButton href={'/post'}>게시판으로 이동하기</S.BoardButton>
          </S.MessageText>
        </S.Message>
      </S.Messages>

      <S.Footer>
        <S.FooterBox>
          <S.FooterPlaceHolder>아래로 계속 스크롤 해주세요.</S.FooterPlaceHolder>
          <S.FooterSendIcon />
        </S.FooterBox>
      </S.Footer>
    </S.MessengerWrapper>
  );
};

export default Messenger;
