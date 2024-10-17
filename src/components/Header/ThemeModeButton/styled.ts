import styled from 'styled-components';

type ThemeModeButtonWrapperProps = {
  $show: boolean;
};

export const ThemeModeButtonWrapper = styled('button')<ThemeModeButtonWrapperProps>`
  background-color: transparent;
  border: none;
  justify-self: end;
  margin-right: 20px;
  transition: 0.5s;
  outline: none;
  z-index: ${({ $show }) => ($show ? 12000 : -1)};
  pointer-events: ${({ $show }) => ($show ? 'auto' : 'none')};
  cursor: ${({ $show }) => ($show ? 'pointer' : 'default')};
  opacity: ${({ $show }) => ($show ? 1 : 0)};

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-right: min(2.5vw, 20px);
  }
`;

export const ToggleSwitchWrapper = styled('div')`
  width: 64px;
  height: 32px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color.gray[800]};
  box-shadow: 0px 0px 8px 4px rgba(50, 50, 50, 0.1);
  position: relative;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(8vw, 64px);
    height: min(4vw, 32px);
  }
`;

export const ToggleSwitch = styled('div')`
  width: 36px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.color.gray[500]};
  border-radius: 32px;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'white' : `${theme.color.yellow[600]}`};
  box-shadow: 0px 0px 8px 4px rgba(50, 50, 50, 0.1);
  position: absolute;
  top: -2px;
  left: ${({ theme }) => (theme.mode === 'dark' ? '0px' : '28px')};
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? 'white' : `${theme.color.yellow[500]}`};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(4.5vw, 36px);
    height: min(4.5vw, 36px);
    top: calc(-1 * min(0.25vw, 2px));
    left: ${({ theme }) => (theme.mode === 'dark' ? '0px' : 'min(3.5vw, 28px)')};
  }
`;
