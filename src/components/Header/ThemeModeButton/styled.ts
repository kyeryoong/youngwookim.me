import styled from 'styled-components';

type ThemeModeButtonWrapperProps = {
  show: boolean;
};

export const ThemeModeButtonWrapper = styled('button')<ThemeModeButtonWrapperProps>`
  width: 70px;
  height: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 170px;
  transition: 0.5s;
  z-index: 12000;
  cursor: pointer;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const ToggleSwitchWrapper = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color.gray[700]};
  padding: 5px;
  transition: 0.5s;
`;

export const ToggleSwitch = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'gold')};
  margin-left: ${({ theme }) => (theme.mode === 'dark' ? '0%' : '30px')};
  transition: 0.5s;
`;
