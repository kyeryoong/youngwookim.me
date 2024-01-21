import * as S from './styled';

function splineUrl(url: string) {
  return `https://prod.spline.design/${url}/scene.splinecode`;
}

export default function Background1() {
  return (
    <S.BackgroundWrapper>
      <S.ToggleButton scene={splineUrl('cY3tEHaMw8FBcNl0')} />
      <S.ComponentSymbol scene={splineUrl('i7xJwmVqnKyShW5h')} />
      <S.Computer scene={splineUrl('lZjBfDdx6g2aNqhD')} />

      <S.Heading>Front-end</S.Heading>
    </S.BackgroundWrapper>
  );
}
