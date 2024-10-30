import Image from 'next/image';
import { PersonCircle } from 'react-bootstrap-icons';
import styled from 'styled-components';

type MessageProps = {
  show: boolean;
  isMine: boolean;
};

type MessageTextProps = {
  isMine: boolean;
};

export const Message = styled('div')<MessageProps>`
  width: 100%;
  max-height: ${({ show }) => (show ? '300px' : '0px')};
  transform: ${({ show }) => (show ? 'scale(1)' : 'scale(0)')};
  transform-origin: ${({ isMine }) => (isMine ? 'bottom right' : 'bottom left')};
  transition: 0.5s;
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
  justify-content: flex-start;
  gap: 20px;
  margin-bottom: ${({ isMine }) => !isMine && '24px'};
`;

export const YoungWooProfile = styled(Image)`
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray[500]};
  border-radius: 20px;
  object-fit: cover;
  object-position: top;
`;

export const DefaultProfile = styled(PersonCircle)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const MessageText = styled('div')<MessageTextProps>`
  font-size: 1.6rem;
  width: fit-content;
  max-width: 80%;
  line-height: 40px;
  text-align: ${({ isMine }) => (isMine ? 'right' : 'left')};
  color: ${({ theme, isMine }) => (isMine ? theme.color.gray[100] : 'transparent')};
  background: ${({ theme, isMine }) =>
    !isMine && `linear-gradient(90deg, ${theme.color.blue[700]}, ${theme.color.lightBlue[300]})`};
  background-clip: ${({ isMine }) => !isMine && 'text'};
  -webkit-background-clip: ${({ isMine }) => !isMine && 'text'};
  word-break: keep-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3vw, 1.6rem);
    line-height: min(5vw, 40px);
  }
`;
