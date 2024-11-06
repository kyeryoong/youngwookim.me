import * as S from './styled';

type MemberProps = {
  name: string;
  position?: string;
  profileImage?: string;
  linkUrl?: string;
};

const Member = ({ name, position, profileImage, linkUrl }: MemberProps) => {
  const handleMemberNameClick = () => {
    if (linkUrl) {
      window.open(linkUrl);
    }
  };

  return (
    <S.MemberWrapper>
      {profileImage ? (
        <S.MemberImage width={48} height={48} src={profileImage} alt={`${name}'s Profile Image`} />
      ) : (
        <S.MemberNoImage />
      )}

      <S.MemberInfo>
        <S.MemberName linkUrl={linkUrl} onClick={handleMemberNameClick}>
          {name}
        </S.MemberName>
        <S.MemberPosition>{position}</S.MemberPosition>
      </S.MemberInfo>
    </S.MemberWrapper>
  );
};

export default Member;
