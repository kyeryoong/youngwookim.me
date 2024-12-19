import { PencilFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const ListPageWrapper = styled('section')``;

export const ListPageHeader = styled('div')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 600;
  width: 100%;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
    margin-bottom: min(12vw, 48px);
  }
`;

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
