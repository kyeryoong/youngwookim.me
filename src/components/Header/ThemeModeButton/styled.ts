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
    margin-right: min(3vw, 20px);
  }
`;
