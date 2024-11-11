import { useCallback } from 'react';

import * as S from './styled';

type ColorProps = {
  turnedOnColor?: string;
  turnedOffColor?: string;
};

type ToggleSwitchProps = {
  isTurnedOn: boolean;
  color?: ColorProps;
  size?: number;
  onClick?: () => void;
};

const ToggleSwitch = ({ isTurnedOn, color, size = 32, onClick }: ToggleSwitchProps) => {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, []);

  return (
    <S.ToggleSwitchWrapper size={size} onClick={handleClick}>
      <S.ToggleSwitch
        isTurnedOn={isTurnedOn}
        turnedOnColor={color?.turnedOnColor}
        turnedOffColor={color?.turnedOffColor}
      />
    </S.ToggleSwitchWrapper>
  );
};

export default ToggleSwitch;
