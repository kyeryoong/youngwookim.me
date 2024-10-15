import { ReactNode } from 'react';

import * as S from './styled';

type ButtonsProps = {
  children?: ReactNode;
};

const Buttons = ({ children }: ButtonsProps) => {
  return <S.ButtonsWrapper>{children}</S.ButtonsWrapper>;
};

export default Buttons;
