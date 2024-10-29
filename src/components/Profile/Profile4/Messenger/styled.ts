import Image from 'next/image';
import Link from 'next/link';
import { SendFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type MessageProps = {
  show: boolean;
  isMine: boolean;
};

type MessageTextProps = {
  isMine: boolean;
};

export const MessengerWrapper = styled('div')`
  width: min(480px, 90vw);
  height: min(800px, 80dvh);
  border-radius: 20px;
  position: fixed;
  top: calc(50dvh - min(400px, 40dvh) + 5dvh);
  right: calc(50vw - min(240px, 45vw));
  border: 1px solid ${({ theme }) => theme.color.gray[900]};
  box-shadow: 0px 0px 20px 8px rgba(50, 50, 50, 0.2);
  display: grid;
  grid-template-rows: fit-content(100%) 1fr fit-content(100%);
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1600px) {
    right: 15vw;
  }

  @media (pointer: coarse) or (max-width: 1200px) {
    right: calc(50vw - min(240px, 45vw));
  }
`;

export const Header = styled('header')`
  height: 72px;
  background-color: ${({ theme }) => theme.color.gray[900]};
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderName = styled('div')`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray[200]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(5vw, 1.5rem);
  }
`;

export const HeaderLabel = styled('label')`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.gray[400]};
  display: flex;
  align-items: center;
  gap: 6px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3vw, 0.9rem);
  }
`;

export const HeaderIndicator = styled('label')`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  display: inline-block;
  background-color: ${({ theme }) => theme.color.green[400]};
`;

export const Footer = styled('footer')`
  height: 72px;
  background-color: ${({ theme }) => theme.color.gray[900]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterBox = styled('div')`
  width: calc(100% - 32px);
  height: 48px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color.black};
  display: grid;
  grid-template-columns: 1fr fit-content(100%);
  align-items: center;
  padding: 0px 20px;
`;

export const FooterPlaceHolder = styled('label')`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.gray[400]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.33vw, 1rem);
  }
`;

export const FooterSendIcon = styled(SendFill)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const Messages = styled('div')`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

export const Message = styled('div')<MessageProps>`
  width: 100%;
  max-height: ${({ show }) => (show ? '300px' : '0px')};
  transform: ${({ show }) => (show ? 'scale(1)' : 'scale(0)')};
  transform-origin: ${({ isMine }) => (isMine ? 'bottom right' : 'bottom left')};
  transition: 0.5s;
  display: flex;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  padding: ${({ show }) => (show ? '16px' : '0px')};
  padding-top: 0px;
`;

export const MessageProfile = styled(Image)`
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray[500]};
  border-radius: 20px;
  margin-right: 12px;
  object-fit: cover;
  object-position: top;
`;

export const MessageText = styled('div')<MessageTextProps>`
  font-size: 1.2rem;
  width: fit-content;
  max-width: 75%;
  line-height: 24px;
  border-radius: 16px;
  padding: 12px 16px;
  text-align: ${({ isMine }) => (isMine ? 'right' : 'left')};
  color: ${({ theme, isMine }) => (isMine ? 'white' : theme.color.gray[200])};
  background-color: ${({ theme, isMine }) =>
    isMine ? theme.color.blue[600] : theme.color.gray[900]};
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(4vw, 1.2rem);
    line-height: min(5vw, 24px);
  }
`;

export const BoardButton = styled(Link)`
  font-size: 1rem;
  width: fit-content;
  border-radius: 8px;
  display: block;
  padding: 12px 16px;
  margin-top: 12px;
  color: white;
  background-color: ${({ theme }) => theme.color.blue[600]};
  pointer-events: all;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue[400]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.33vw, 1rem);
  }
`;
