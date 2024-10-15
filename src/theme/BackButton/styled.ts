import { ChevronLeft } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const BackButtonWrapper = styled('button')`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }
`;

export const BackIcon = styled(ChevronLeft)`
  width: 100%;
  height: 100%;
  padding: 15%;
  color: ${({ theme }) => theme.color.gray[300]};
`;
