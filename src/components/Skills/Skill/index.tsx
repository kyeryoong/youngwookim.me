import * as S from './styled';

type SkillProps = {
  name: string;
  customImage?: string;
  textColor: string;
  backgroundColor1: number[];
  backgroundColor2?: number[];
  backgroundColorOffset1?: number;
  backgroundColorOffset2?: number;
  highlight?: boolean;
};

const Skill = ({
  name,
  customImage,
  textColor,
  backgroundColor1,
  backgroundColor2,
  backgroundColorOffset1 = 30,
  backgroundColorOffset2 = 50,
}: SkillProps) => {
  const rgb1 = backgroundColor2
    ? `rgb(${backgroundColor1[0]}, ${backgroundColor1[1]}, ${backgroundColor1[2]})`
    : `rgb(${backgroundColor1[0] + backgroundColorOffset1}, ${
        backgroundColor1[1] + backgroundColorOffset1
      }, ${backgroundColor1[2] + backgroundColorOffset1})`;

  const rgb2 = backgroundColor2
    ? `rgb(${backgroundColor2[0]}, ${backgroundColor2[1]}, ${backgroundColor2[2]})`
    : `rgb(${backgroundColor1[0] - backgroundColorOffset2}, ${
        backgroundColor1[1] - backgroundColorOffset2
      }, ${backgroundColor1[2] - backgroundColorOffset2})`;

  const imageSrc = customImage ?? `/skills/${name}.svg`;

  return (
    <S.SkillWrapper rgb1={rgb1} rgb2={rgb2}>
      <S.SkillIcon width={60} height={60} src={imageSrc} alt={`${name} Icon`} />
      <S.SkillName textColor={textColor}>{name}</S.SkillName>
    </S.SkillWrapper>
  );
};

export default Skill;
