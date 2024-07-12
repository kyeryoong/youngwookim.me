import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import * as S from './styled';

const Profile2 = observer(() => {
  return (
    <S.ProfilePageWrapper>
      <S.TitleWrapper>
        <S.Title>
          Education &<br />
          Experience
        </S.Title>
      </S.TitleWrapper>

      <S.CardVideo1 src={`/profile/1_${store.theme}.mp4`} autoPlay muted loop />
      <S.CardVideo2 src={`/profile/2_${store.theme}.mp4`} autoPlay muted loop />

      <S.ContentWrapper>
        <S.Content>
          <S.ContentTitle>홍익대학교</S.ContentTitle>
          <S.ContentSubtitle>컴퓨터공학전공</S.ContentSubtitle>
          <S.ContentDays>2017.3 ~ 2023.2</S.ContentDays>
        </S.Content>
        <S.Content>
          <S.ContentTitle>티맥스와플</S.ContentTitle>
          <S.ContentSubtitle>WAPL 협업 솔루션 - Front-end 연구원</S.ContentSubtitle>
          <S.ContentDays>2023.7 ~ </S.ContentDays>
        </S.Content>
      </S.ContentWrapper>
    </S.ProfilePageWrapper>
  );
});

export default Profile2;
