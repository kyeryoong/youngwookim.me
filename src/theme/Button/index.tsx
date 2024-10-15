import { ReactNode } from 'react';

import * as S from './styled';

type ButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ icon, children, onClick, disabled }: ButtonProps) => {
  return (
    <S.ButtonWrapper onClick={onClick} disabled={disabled}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.ButtonWrapper>
  );
};

export default Button;
