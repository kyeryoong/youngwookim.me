import Logo from './Logo';
import MenuButton from './MenuButton';
import * as S from './styled';
import ThemeModeButton from './ThemeModeButton';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Logo />
      <ThemeModeButton />
      <MenuButton />
    </S.HeaderWrapper>
  );
};

export default Header;
