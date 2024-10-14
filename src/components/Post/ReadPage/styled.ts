import { ChevronLeft, ClockFill, PersonFill } from 'react-bootstrap-icons';
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
  font-size: 1.2rem;
  font-weight: 300;
  width: 100px;
  height: 20px;
  color: ${({ theme }) => theme.color.gray[500]};
  display: block;
`;

export const InfoValue = styled('h3')`
  font-size: 1.2rem;
  font-weight: 600;
  height: 20px;
  color: ${({ theme }) => theme.color.white};
`;

export const UserIcon = styled(PersonFill)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const TimeIcon = styled(ClockFill)`
  width: 20px;
  height: 20px;
  padding: 2px;
  color: ${({ theme }) => theme.color.gray[500]};
`;

export const Content = styled('p')`
  font-size: 1.5rem;
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
