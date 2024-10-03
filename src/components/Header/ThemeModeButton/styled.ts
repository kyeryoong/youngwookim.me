import styled from 'styled-components';

type ThemeModeButtonWrapperProps = {
  $show: boolean;
};

export const ThemeModeButtonWrapper = styled('button')<ThemeModeButtonWrapperProps>`
  width: 70px;
  height: 40px;
  background-color: transparent;
  border: none;
  justify-self: end;
  margin-right: 30px;
  transition: 0.5s;
  z-index: ${({ $show }) => ($show ? 12000 : -1)};
  pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
  cursor: ${({ $show }) => ($show ? 'pointer' : 'default')};
  opacity: ${({ $show }) => ($show ? 1 : 0)};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 56px;
    height: 32px;
    margin-right: 24px;
  }
`;

export const ToggleSwitchWrapper = styled('div')`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color.gray[700]};
  padding: 5px;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding: 4px;
  }
`;

export const ToggleSwitch = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  background-color: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'gold')};
  margin-left: ${({ theme }) => (theme.mode === 'dark' ? '0%' : '30px')};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 24px;
    height: 24px;
    margin-left: ${({ theme }) => (theme.mode === 'dark' ? '0%' : '24px')};
  }
`;
