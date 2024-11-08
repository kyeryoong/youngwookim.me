import * as S from './styled';

type SourceCodeButtonProps = {
  userName: string;
  repositoryName: string;
  linkUrl: string;
};

const SourceCodeButton = ({ userName, repositoryName, linkUrl }: SourceCodeButtonProps) => {
  const handleClick = () => {
    if (linkUrl) {
      window.open(linkUrl);
    }
  };

  return (
    <S.SourceCodeButtonWrapper onClick={handleClick}>
      <S.GitHubIcon />
      <S.Prefix>{userName}</S.Prefix>
      <S.Slash>&#47;</S.Slash>
      <S.Suffix>{repositoryName}</S.Suffix>
    </S.SourceCodeButtonWrapper>
  );
};

export default SourceCodeButton;
