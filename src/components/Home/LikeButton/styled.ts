import { Heart, HeartFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type LikeButtonWrapperProps = {
  isHeartFilled: boolean;
};

export const LikeButtonWrapper = styled('button')<LikeButtonWrapperProps>`
  width: 160px;
  height: 80px;
  background-color: ${({ theme, isHeartFilled }) =>
    isHeartFilled ? '#ff6666' : theme.color.gray[700]};
  border-radius: 12px;
  border: none;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme, isHeartFilled }) =>
      isHeartFilled ? '#ff6666' : theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(20vw, 160px);
    height: min(10vw, 80px);
    border-radius: min(1.5vw, 12px);
    gap: min(1.5vw, 12px);
  }
`;

export const HeartUnFilledIcon = styled(Heart)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(4vw, 32px);
    height: min(4vw, 32px);
  }
`;

export const HeartFilledIcon = styled(HeartFill)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
  animation-name: PopUp;
  animation-duration: 0.5s;

  @keyframes PopUp {
    0% {
      opacity: 0;
      transform: scale(0);
    }

    75% {
      opacity: 1;
      transform: scale(1.25);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(4vw, 32px);
    height: min(4vw, 32px);
  }
`;

export const Count = styled('span')`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(4vw, 2rem);
  }
`;
