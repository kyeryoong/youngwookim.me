import { ChevronLeft } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const BackButtonWrapper = styled('button')`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  margin: 0px;
  margin-left: -1%;
  padding: 0px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }
`;

export const BackIcon = styled(ChevronLeft)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.gray[300]};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(6vw, 32px);
    height: min(6vw, 32px);
  }
`;
