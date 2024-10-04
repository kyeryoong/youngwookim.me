import styled from 'styled-components';

type ToggleSwitchWrapperProps = {
  isTurnedOn: boolean;
};

export const ToggleSwitchWrapper = styled('div')`
  width: 140px;
  height: 80px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color.gray[700]};
  padding: 10px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }
`;

export const ToggleSwitch = styled('div')<ToggleSwitchWrapperProps>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme, isTurnedOn }) =>
    isTurnedOn ? theme.color.gray[300] : theme.color.gray[500]};
  transition: 0.5s;
  margin-left: ${({ isTurnedOn }) => (isTurnedOn ? '60px' : '0px')};
`;
