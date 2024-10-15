import styled from 'styled-components';

export const CreatePageWrapper = styled('div')``;

export const Label = styled('label')`
  font-size: ${({ theme }) => theme.font.l};
  color: ${({ theme }) => theme.color.gray[300]};
  display: block;
  margin-bottom: 8px;
`;

export const NameInputBox = styled('input')`
  font-size: ${({ theme }) => theme.font.xl};
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }
`;

export const ContentInputBox = styled('textarea')`
  font-size: ${({ theme }) => theme.font.l};
  width: 100%;
  height: 300px;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  resize: none;
  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }
`;

export const ReCAPTCHAWrapper = styled('div')`
  width: fit-content;
  margin-top: 40px;
  border-radius: 6px;
  overflow: hidden;
`;
