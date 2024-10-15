import { ClockFill, PersonFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const ReadPageWrapper = styled('div')``;

export const InfoWrapper = styled('div')`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};
  padding-bottom: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Info = styled('div')`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoLabel = styled('label')`
  font-size: ${({ theme }) => theme.font.l};
  width: 100px;
  height: 20px;
  color: ${({ theme }) => theme.color.gray[400]};
  display: block;
`;

export const InfoValue = styled('h3')`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 600;
  height: 20px;
  color: ${({ theme }) => theme.color.white};
`;

export const UserIcon = styled(PersonFill)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const TimeIcon = styled(ClockFill)`
  width: 20px;
  height: 20px;
  padding: 2px;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const Content = styled('p')`
  font-size: ${({ theme }) => theme.font.l};
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
