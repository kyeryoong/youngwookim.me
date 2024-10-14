import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

import * as S from './styled';

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = observer(({ children, onClick, disabled }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} disabled={disabled}>
      {children}
    </S.Button>
  );
});

export default Button;
