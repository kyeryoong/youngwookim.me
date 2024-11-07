import styled from 'styled-components';

import { ButtonTypes } from '.';

type ButtonWrapperProps = {
  type?: ButtonTypes;
  textColor: string;
  backgroundColor: string;
  hoveredTextColor: string;
  hoveredBackgroundColor: string;
  pressedTextColor: string;
  pressedBackgroundColor: string;
  disabledTextColor: string;
  disabledBackgroundColor: string;
};

type IconWrapperProps = {
  disabled: boolean;
  disabledIconColor: string;
};

export const ButtonWrapper = styled('button')<ButtonWrapperProps>`
  font-size: ${({ theme }) => theme.font.mobile.xxl};
  width: fit-content;
  height: 48px;
  border: none;
  border-radius: 6px;
  padding: 0px 20px;
  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};

  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: ${({ hoveredTextColor }) => hoveredTextColor};
    background-color: ${({ hoveredBackgroundColor }) => hoveredBackgroundColor};
  }

  &:active {
    color: ${({ pressedTextColor }) => pressedTextColor};
    background-color: ${({ pressedBackgroundColor }) => pressedBackgroundColor};
  }

  &:disabled {
    color: ${({ disabledTextColor }) => disabledTextColor};
    background-color: ${({ disabledBackgroundColor }) => disabledBackgroundColor};
    cursor: not-allowed;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    height: 40px;
    padding: 0px min(4vw, 16px);
  }
`;

export const IconWrapper = styled('div')<IconWrapperProps>`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ disabled, disabledIconColor }) => disabled && disabledIconColor};
    transition: 0.5s;
  }
`;

export const ChildrenWrapper = styled('div')`
  font-weight: 500;
`;
