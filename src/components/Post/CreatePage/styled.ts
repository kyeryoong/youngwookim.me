import { ChevronLeft } from 'react-bootstrap-icons';
import styled from 'styled-components';

export const CreatePageWrapper = styled('div')``;

export const Label = styled('label')`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.gray[300]};
  display: block;
  margin-bottom: 8px;
`;

export const NameInputBox = styled('input')`
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }
`;

export const ContentInputBox = styled('textarea')`
  font-size: 1.1rem;
  width: 100%;
  height: 300px;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  resize: none;
  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }
`;

export const BackButton = styled(ChevronLeft)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;
