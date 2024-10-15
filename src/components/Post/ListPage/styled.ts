import { PencilFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const ListPageWrapper = styled('div')``;

export const LoadingSpinnerWrapper = styled('div')`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WriteIcon = styled(PencilFill)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.color.white};
`;
