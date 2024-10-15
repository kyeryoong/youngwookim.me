import styled from 'styled-components';

type ModalProps = {
  isOpen: boolean;
};

export const Background = styled('div')<ModalProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? 1000 : -1)};
  transition: 0.5s;
`;

export const ModalWrapper = styled('div')<ModalProps>`
  width: 400px;
  height: fit-content;
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgb(20, 20, 20)' : theme.color.black};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0px)' : 'translateY(100px)')};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(80vw, 400px);
  }
`;
