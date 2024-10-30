import { ReactNode, useEffect } from 'react';

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

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = '16px';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.paddingRight = '0px';
    }
  }, [isOpened]);

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
