import * as S from './styled';

type SourceCodeButtonProps = {
  linkUrl: string;
};

const SourceCodeButton = ({ linkUrl }: SourceCodeButtonProps) => {
  const handleClick = () => {
    if (linkUrl) {
      window.open(linkUrl);
    }
  };

  return (
    <S.SourceCodeButtonWrapper onClick={handleClick}>
      <S.GitHubIcon />
      <S.Prefix>kyeryoong</S.Prefix>
      <S.Slash>&#47;</S.Slash>
      <S.Suffix>youngwookim.me</S.Suffix>
    </S.SourceCodeButtonWrapper>
  );
};

export default SourceCodeButton;
