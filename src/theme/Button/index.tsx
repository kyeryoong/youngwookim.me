import { ReactNode } from 'react';

import * as S from './styled';

type ButtonProps = {
  type?: 'default' | 'delete';
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ type = 'default', icon, children, onClick, disabled }: ButtonProps) => {
  return (
    <S.ButtonWrapper type={type} onClick={onClick} disabled={disabled}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.ButtonWrapper>
  );
};

export default Button;
