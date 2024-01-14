import * as S from './styled';
import { observer } from 'mobx-react';

const Logo = observer(() => {
  return (
    <S.LogoWrapper href="/">
      <S.LogoImage width={200} height={200} alt="archive-eng Logo" src={'/logo_white.png'} />
      <S.LogoTitle>archive-eng</S.LogoTitle>
    </S.LogoWrapper>
  );
});

export default Logo;
