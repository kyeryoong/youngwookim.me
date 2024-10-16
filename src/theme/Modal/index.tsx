import { ReactNode } from 'react';

import * as S from './styled';

type ModalProps = {
  isOpened: boolean;
  title?: string;
  text?: string;
  children?: ReactNode;
  onBackgroundClick?: () => void;
};

const Modal = ({ isOpened, title, text, children, onBackgroundClick }: ModalProps) => {
  const handleBackgroundClick = () => {
    if (onBackgroundClick) {
      onBackgroundClick();
    }
  };

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <S.ModalBackground isOpened={isOpened} onClick={handleBackgroundClick}>
      <S.ModalWrapper isOpened={isOpened} onClick={handleModalClick}>
        {title && <S.ModalTitle>{title}</S.ModalTitle>}
        {text && <S.ModalText>{text}</S.ModalText>}
        {children}
      </S.ModalWrapper>
    </S.ModalBackground>
  );
};

export default Modal;
