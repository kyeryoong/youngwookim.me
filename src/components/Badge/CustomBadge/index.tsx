import { GradientBackground } from './GradientBackground';
import * as S from './styled';

type CustomBadgeProps = {
  name: string;
  size?: number;
  customImage?: string;
  textColor: string;
  backgroundColor1: string;
  backgroundColor2?: string;
  backgroundColorOffset1?: number;
  backgroundColorOffset2?: number;
  core?: boolean;
};

const hexToRgb = (hex: string | undefined) => {
  if (hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  } else {
    return { r: 0, g: 0, b: 0 };
  }
};

const CustomBadge = ({
  name,
  size = 40,
  customImage,
  textColor,
  backgroundColor1,
  backgroundColor2,
  backgroundColorOffset1 = 20,
  backgroundColorOffset2 = 60,
  core,
}: CustomBadgeProps) => {
  const rgbObject1 = hexToRgb(backgroundColor1);
  const rgbObject2 = hexToRgb(backgroundColor2);

  const rgb1 =
    Object.entries(rgbObject2).toString() !== Object.entries({ r: 0, g: 0, b: 0 }).toString()
      ? `rgb(${rgbObject1?.r}, ${rgbObject1?.g}, ${rgbObject1?.b})`
      : `rgb(${rgbObject1.r + backgroundColorOffset1}, ${rgbObject1.g + backgroundColorOffset1}, ${
          rgbObject1.b + backgroundColorOffset1
        })`;

  const rgb2 =
    Object.entries(rgbObject2).toString() !== Object.entries({ r: 0, g: 0, b: 0 }).toString()
      ? `rgb(${rgbObject2?.r}, ${rgbObject2?.g}, ${rgbObject2?.b})`
      : `rgb(${rgbObject1.r - backgroundColorOffset2}, ${rgbObject1.g - backgroundColorOffset2}, ${
          rgbObject1.b - backgroundColorOffset2
        })`;

  const src = customImage ? `/tech/${customImage}` : `/tech/${name}.svg`;

  return (
    <S.CustomBadgeWrapper $size={size} $rgb1={rgb1} $rgb2={rgb2} $core={core}>
      <S.CustomBadgeIcon
        $size={size}
        $textColor={textColor}
        width={size}
        height={size}
        src={src}
        alt={`${name} Icon`}
      />
      <S.CustomBadgeName $size={size} $textColor={textColor}>
        {name}
      </S.CustomBadgeName>
      {core && <GradientBackground />}
    </S.CustomBadgeWrapper>
  );
};

export default CustomBadge;
