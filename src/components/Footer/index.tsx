import { usePathname } from 'next/navigation';

import * as S from './styled';

const Footer = () => {
  const pathname = usePathname();
  const hide = ['/'].includes(pathname);

  const handleGitHubClick = () => {
    window.open('https://github.com/kyeryoong');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/kyeryoong');
  };

  const handleEmailClick = () => {
    window.open(
      'mailto:kyeryoong@gmail.com?subject=안녕하세요, youngwookim.me을 통해서 이메일 드립니다.',
    );
  };

  return (
    <S.FooterWrapper $hide={hide}>
      <S.FooterTop>
        <S.FooterTopLeft>
          <S.Name>youngwookim.me</S.Name>
          <S.Name>Kim Young-Woo</S.Name>
          <S.Name>김영우</S.Name>
        </S.FooterTopLeft>
        <S.FooterTopRight>
          <S.ContactLabel>contact</S.ContactLabel>
          <S.ContactButtonWrapper>
            <S.GitHubButton onClick={handleGitHubClick} />
            <S.LinkedInButton onClick={handleLinkedInClick} />
            <S.EmailButton onClick={handleEmailClick} />
          </S.ContactButtonWrapper>
        </S.FooterTopRight>
      </S.FooterTop>

      <S.FooterBottom>{new Date().getFullYear()}. archive-eng. All rights reserved.</S.FooterBottom>
    </S.FooterWrapper>
  );
};

export default Footer;
