import { ReactNode } from 'react';

import * as S from './styled';

type ModalProps = {
  isOpen: boolean;
  children?: ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <S.Background isOpen={isOpen}>
      <S.ModalWrapper isOpen={isOpen}>{children}</S.ModalWrapper>
    </S.Background>
  );
};

export default Modal;
