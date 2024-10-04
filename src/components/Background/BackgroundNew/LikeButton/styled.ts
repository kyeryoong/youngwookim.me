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
`;

export const HeartUnFilledIcon = styled(Heart)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
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
`;

export const Count = styled('span')`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.white};
`;
