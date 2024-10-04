import { Check2 } from 'react-bootstrap-icons';
import styled from 'styled-components';

type CheckBoxWrapperProps = {
  isTurnedOn: boolean;
};

export const CheckBoxWrapper = styled('div')`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.color.gray[700]};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 800px) {
    width: min(10vw, 80px);
    height: min(10vw, 80px);
    border-radius: min(1.5vw, 12px);
  }
`;

export const CheckIcon = styled(Check2)<CheckBoxWrapperProps>`
  width: 80%;
  height: 80%;
  color: ${({ theme }) => theme.color.white};
  opacity: ${({ isTurnedOn }) => (isTurnedOn ? 1 : 0)};
  transition: 0.25s;
`;
