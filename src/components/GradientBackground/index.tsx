'use client';
import * as S from './styled';
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';

type GradientBackgroundProps = {
  colors: string[];
};

export default function GradientBackground({ colors }: GradientBackgroundProps) {
  return (
    <S.Wrapper>
      <MeshGradientRenderer className="gradient" colors={colors} />
    </S.Wrapper>
  );
}
