import { ReactNode } from 'react';

import * as S from './styled';

type CustomColorProps = {
  backgroundColor?: string;
  hoveredBackgroundColor?: string;
  textColor?: string;
};

type ButtonProps = {
  type?: 'default' | 'delete';
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  customColor?: CustomColorProps;
};

const Button = ({
  type = 'default',
  icon,
  children,
  onClick,
  disabled,
  customColor,
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      type={type}
      onClick={onClick}
      disabled={disabled}
      backgroundColor={customColor?.backgroundColor}
      hoveredBackgroundColor={customColor?.hoveredBackgroundColor}
      textColor={customColor?.textColor}
    >
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.ButtonWrapper>
  );
};

export default Button;
