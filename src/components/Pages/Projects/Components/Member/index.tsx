import * as S from './styled';

type MemberProps = {
  name: string;
  position?: string;
  imageUrl?: string;
  linkUrl?: string;
};

const Member = ({ name, position, imageUrl, linkUrl }: MemberProps) => {
  const handleClick = () => {
    if (linkUrl) {
      window.open(linkUrl);
    }
  };

  return (
    <S.MemberWrapper>
      {imageUrl ? (
        <S.MemberImage width={48} height={48} src={imageUrl} alt={`${name}'s Profile Image`} />
      ) : (
        <S.MemberNoImage />
      )}

      <S.MemberInfo>
        <S.MemberName linkUrl={linkUrl} onClick={handleClick}>
          {name}
        </S.MemberName>
        <S.MemberPosition>{position}</S.MemberPosition>
      </S.MemberInfo>
    </S.MemberWrapper>
  );
};

export default Member;
