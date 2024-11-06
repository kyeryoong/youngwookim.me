import { ClockFill, PersonFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const ReadPageWrapper = styled('div')``;

export const InfoWrapper = styled('div')`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[800]};
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-bottom: min(4vw, 32px);
    gap: min(2.5vw, 20px);
  }
`;

export const Info = styled('div')`
  display: grid;
  grid-template-columns: fit-content(100%) fit-content(100%) 1fr;
  align-items: center;
  gap: 6px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(0.75vw, 6px);
  }
`;

export const InfoLabel = styled('label')`
  font-size: ${({ theme }) => theme.font.l};
  width: 80px;
  height: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.gray[400]};
  display: block;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
    width: 60px;
  }
`;

export const InfoValue = styled('h3')`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 600;
  height: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;

export const UserIcon = styled(PersonFill)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const TimeIcon = styled(ClockFill)`
  width: 20px;
  height: 20px;
  padding: 3px;
  color: ${({ theme }) => theme.color.gray[400]};
`;

export const Content = styled('p')`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 600;
  min-height: 300px;
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[800]};
  padding-top: 32px;
  padding-bottom: 32px;
  margin-bottom: 32px;

  @media (pointer: coarse) or (max-width: 1000px) {
    padding-top: min(4vw, 32px);
    padding-bottom: min(4vw, 32px);
    margin-bottom: min(4vw, 32px);
  }
`;

export const LoadingSpinnerWrapper = styled('div')`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalForm = styled('form')``;
