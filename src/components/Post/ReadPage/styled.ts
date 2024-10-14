import { ChevronLeft } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const ReadPageWrapper = styled('div')``;

export const BackButton = styled(ChevronLeft)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

export const Title = styled('h2')`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

export const LabelWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};
`;

export const Label = styled('label')`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.gray[500]};
  display: block;
`;

export const UserName = styled('h3')`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

export const Content = styled('p')`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};
`;

export const LoadingSpinnerWrapper = styled('div')`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
