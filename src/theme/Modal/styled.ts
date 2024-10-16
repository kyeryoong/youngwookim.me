import styled from 'styled-components';

type ModalProps = {
  isOpened: boolean;
};

export const ModalBackground = styled('div')<ModalProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  background-color: ${({ theme, isOpened }) =>
    theme.mode === 'dark'
      ? `rgba(0, 0, 0, ${isOpened ? 0.5 : 0})`
      : `rgba(150, 150, 150, ${isOpened ? 0.5 : 0})`};
  z-index: ${({ isOpened }) => (isOpened ? 10000 : -1)};
`;

export const ModalWrapper = styled('div')<ModalProps>`
  width: 400px;
  height: fit-content;
  padding: 24px;
  border-radius: 12px;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgb(20, 20, 20)' : theme.color.black};
  transform: ${({ isOpened }) => (isOpened ? 'translateY(0px)' : 'translateY(100px)')};
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(80vw, 400px);
  }
`;

export const ModalTitle = styled('h1')`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 8px;
`;

export const ModalText = styled('p')`
  font-size: ${({ theme }) => theme.font.m};
  color: ${({ theme }) => theme.color.gray[300]};
`;
