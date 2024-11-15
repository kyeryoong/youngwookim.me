import * as S from './styled';

type Page4Props = {
  positionY: number;
};

const Page4 = ({ positionY }: Page4Props) => {
  const vh = window.innerHeight;

  const isFocusedVhList = [
    positionY < 8.5 * vh,
    positionY >= 8.5 * vh && positionY < 9.5 * vh,
    positionY >= 9.5 * vh && positionY < 10.5 * vh,
    positionY >= 10.5 * vh,
  ];

  const getFocusedIndex = () => {
    if (isFocusedVhList[0]) {
      return 0;
    } else if (isFocusedVhList[1]) {
      return 1;
    } else if (isFocusedVhList[2]) {
      return 2;
    } else if (isFocusedVhList[3]) {
      return 3;
    } else {
      return 0;
    }
  };

  return (
    <S.Page4Wrapper>
      <S.DescriptionsWrapper show={(positionY - 8 * vh) / vh > 0}>
        <S.DescriptionList progress={getFocusedIndex()}>
          <S.Description isFocused={isFocusedVhList[0]}>
            <S.DescriptionTitle>백엔드 개발자</S.DescriptionTitle>
            <S.DescriptionSubtitle>Backend Developer</S.DescriptionSubtitle>

            <S.DescriptionContentList>
              <S.DescriptionContent>RESTful API 요청/응답 포맷 협의</S.DescriptionContent>
              <S.DescriptionContent>API 통신 결과 검증</S.DescriptionContent>
            </S.DescriptionContentList>
          </S.Description>

          <S.Description isFocused={isFocusedVhList[1]}>
            <S.DescriptionTitle>서비스 기획자</S.DescriptionTitle>
            <S.DescriptionSubtitle>Service Planner</S.DescriptionSubtitle>

            <S.DescriptionContentList>
              <S.DescriptionContent>신규 기능 구현 가능성 검토</S.DescriptionContent>
              <S.DescriptionContent>예외 케이스 및 부족한 명세 검토</S.DescriptionContent>
              <S.DescriptionContent>사용자 경험과 디자인 논의</S.DescriptionContent>
            </S.DescriptionContentList>
          </S.Description>

          <S.Description isFocused={isFocusedVhList[2]}>
            <S.DescriptionTitle>프로덕트 매니저</S.DescriptionTitle>
            <S.DescriptionSubtitle>Product Manager</S.DescriptionSubtitle>

            <S.DescriptionContentList>
              <S.DescriptionContent>고객사/VOC 요구 사항 분석</S.DescriptionContent>
              <S.DescriptionContent>패치 일정과 우선 순위 조율</S.DescriptionContent>
              <S.DescriptionContent>개발 완료 / 진행 중 / 예정 항목 수시 점검</S.DescriptionContent>
            </S.DescriptionContentList>
          </S.Description>

          <S.Description isFocused={isFocusedVhList[3]}>
            <S.DescriptionTitle>품질 관리자</S.DescriptionTitle>
            <S.DescriptionSubtitle>Quality Assurance</S.DescriptionSubtitle>

            <S.DescriptionContentList>
              <S.DescriptionContent>이슈 재현 사항과 상세 시나리오 분석</S.DescriptionContent>
              <S.DescriptionContent>신속하고 빠르게 이슈 해결</S.DescriptionContent>
              <S.DescriptionContent>
                IMS(Issue Management System) 기반 히스토리 관리
              </S.DescriptionContent>
            </S.DescriptionContentList>
          </S.Description>
        </S.DescriptionList>
      </S.DescriptionsWrapper>
    </S.Page4Wrapper>
  );
};

export default Page4;
