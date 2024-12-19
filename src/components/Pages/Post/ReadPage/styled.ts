import { ChevronLeft, ClockFill, PersonFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type InfoValueProps = {
  isAdmin?: boolean;
};

export const ReadPageWrapper = styled('section')``;

export const ReadPageHeader = styled('div')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 600;
  width: 100%;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.color.white};
  display: grid;
  grid-template-columns: fit-content(100%) 1fr;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
    margin-bottom: min(12vw, 48px);
    gap: min(1vw, 8px);
  }
`;

export const BackButton = styled(ChevronLeft)`
  width: 48px;
  height: 48px;
  padding: 8px;
  margin-left: -12px;
  transition: 0.5s;
  color: ${({ theme }) => theme.color.gray[600]};
  cursor: pointer;

  &:hover {
    transform: scale(1.25);
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-left: calc(-1 * min(3vw, 12px));
  }
`;

export const TitleWrapper = styled('div')`
  line-height: 36px;
  margin-top: 6px;

  @media (pointer: coarse) or (max-width: 1000px) {
    line-height: 28px;
    margin-top: 10px;
  }
`;

export const TitleAdminPrefix = styled('p')`
  color: ${({ theme }) => theme.color.blue[500]};
  display: inline;
`;

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
  font-weight: 300;
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

export const InfoValue = styled('h3')<InfoValueProps>`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 600;
  height: 20px;
  line-height: 20px;
  color: ${({ theme, isAdmin }) => (isAdmin ? theme.color.blue[500] : theme.color.white)};
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
  font-weight: 400;
  min-height: 300px;
  color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[800]};
  padding-top: 32px;
  padding-bottom: 32px;
  margin-bottom: 32px;
  word-break: break-all;
  white-space: pre-line;

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
