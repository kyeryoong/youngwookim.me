import { PencilFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const ListPageWrapper = styled('div')``;

export const LoadingSpinnerWrapper = styled('div')`
  font-size: ${({ theme }) => theme.font.xl};
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.gray[400]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
  }
`;

export const WriteIcon = styled(PencilFill)`
  color: ${({ theme }) => theme.color.white};
`;
