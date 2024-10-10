import styled from 'styled-components';

type SwitchWrapperProps = {
  isTurnedOn: boolean;
};

export const SwitchWrapper = styled('div')`
  height: 80px;
  aspect-ratio: 14 / 8;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.color.gray[700]};
  padding: 10px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    height: min(10vw, 80px);
    border-radius: min(5vw, 40px);
    padding: min(1.25vw, 10px);
  }
`;

export const Switch = styled('div')<SwitchWrapperProps>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme, isTurnedOn }) =>
    isTurnedOn ? theme.color.gray[300] : theme.color.gray[500]};
  transition: 0.5s;
  margin-left: ${({ isTurnedOn }) => (isTurnedOn ? '60px' : '0px')};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(7.5vw, 60px);
    height: min(7.5vw, 60px);
    border-radius: min(3.75vw, 30px);
    margin-left: ${({ isTurnedOn }) => (isTurnedOn ? 'min(7.5vw, 60px)' : '0px')};
  }
`;
