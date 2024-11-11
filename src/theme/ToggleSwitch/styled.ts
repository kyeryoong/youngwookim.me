import styled from 'styled-components';

type ToggleSwitchWrapperProps = {
  size: number;
};

type ToggleSwitchProps = {
  isTurnedOn: boolean;
  turnedOnColor?: string;
  turnedOffColor?: string;
};

export const ToggleSwitchWrapper = styled('div')<ToggleSwitchWrapperProps>`
  height: ${({ size }) => `${size}px`};
  aspect-ratio: 2 / 1;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.color.gray[800]};
  box-shadow: 0px 0px 4px 4px rgba(30, 30, 30, 0.15);
`;

export const ToggleSwitch = styled('div')<ToggleSwitchProps>`
  height: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid ${({ theme }) => theme.color.gray[700]};
  border-radius: 1000px;
  background-color: ${({ theme, isTurnedOn, turnedOnColor, turnedOffColor }) =>
    isTurnedOn ? turnedOnColor ?? theme.color.gray[300] : turnedOffColor ?? theme.color.gray[500]};
  box-shadow: 0px 0px 4px 4px rgba(30, 30, 30, 0.15);
  transform: ${({ isTurnedOn }) =>
    isTurnedOn ? 'translateX(100%) scale(1.2)' : 'translateX(0%) scale(1.2)'};
  transition: 0.5s;
`;
