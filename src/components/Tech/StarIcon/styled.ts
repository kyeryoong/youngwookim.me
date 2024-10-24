import styled from 'styled-components';

type TooltipProps = {
  $isHovered: boolean;
};

export const StarIconWrapper = styled('div')`
  width: 10px;
  height: 10px;
  margin-top: 16px;
  margin-left: 12px;
  align-self: flex-start;
  position: relative;
  z-index: 100;

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-top: min(2vw, 16px);
    margin-left: min(1.5vw, 12px);
  }
`;

export const StarIcon = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: gold;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.5);
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    &:hover {
      transform: scale(1);
    }
  }
`;

export const Tooltip = styled('div')<TooltipProps>`
  font-size: ${({ theme }) => theme.font.s};
  border-radius: 5px;
  padding: 10px;
  position: absolute;
  bottom: 20px;
  left: 0px;
  background-color: ${({ theme }) => theme.color.gray[100]};
  color: ${({ theme }) => theme.color.gray[700]};
  transition: 0.5s;
  white-space: nowrap;
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.s};
    display: none;
  }
`;
