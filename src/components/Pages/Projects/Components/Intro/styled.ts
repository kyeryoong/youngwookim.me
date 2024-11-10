import { ChevronDown, Mouse } from 'react-bootstrap-icons';
import styled from 'styled-components';

type MouseScrollDownWrapperProps = {
  showMouseScroll: boolean;
  mouseScrollColor: string;
};

export const IntroWrapper = styled('div')`
  width: 100%;
  height: 100svh;
  position: relative;
`;

export const MouseScrollDownWrapper = styled('div')<MouseScrollDownWrapperProps>`
  width: 32px;
  position: absolute;
  bottom: 64px;
  left: calc(50vw - 16px);
  display: flex;
  flex-direction: column;
  opacity: ${({ showMouseScroll }) => (showMouseScroll ? 1 : 0)};
  color: ${({ mouseScrollColor }) => mouseScrollColor};
  gap: 16px;
  align-items: center;
  transition: 1s;
`;

export const MouseScrollIcon = styled(Mouse)`
  width: 32px;
  height: 32px;
  opacity: 0.75;
`;

export const ArrowDownIcon = styled(ChevronDown)`
  width: 20px;
  height: 20px;
  opacity: 0.75;
  animation: floating 2s infinite;

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
