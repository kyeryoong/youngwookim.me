import { useCallback } from 'react';
import { CSSProperties } from 'styled-components';

import * as S from './styled';

export type IconButtonTypes = 'left' | 'right' | 'close';

type IconButtonProps = {
  type: IconButtonTypes;
  size?: number;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
};

const IconButton = ({ type, size = 40, color, onClick, disabled, style }: IconButtonProps) => {
  const getIcon = useCallback(() => {
    switch (type) {
      case 'left':
        return <S.LeftIcon color={color} />;
      case 'right':
        return <S.RightIcon color={color} />;
      case 'close':
        return <S.CloseIcon color={color} />;
    }
  }, []);

  return (
    <S.IconButtonWrapper size={size} onClick={onClick} disabled={disabled} style={style}>
      {getIcon()}
    </S.IconButtonWrapper>
  );
};

export default IconButton;
