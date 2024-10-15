import { PencilFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type TextLengthProps = {
  isMaxLength: boolean;
};

export const CreatePageWrapper = styled('div')``;

export const Label = styled('label')`
  font-size: ${({ theme }) => theme.font.l};
  color: ${({ theme }) => theme.color.gray[300]};
  display: block;
  margin-bottom: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
    margin-bottom: min(1vw, 8px);
  }
`;

export const NameInputBox = styled('input')`
  font-size: ${({ theme }) => theme.font.xl};
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 16px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    padding: min(2vw, 16px);
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
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  resize: none;
  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    padding: min(2vw, 16px);
  }
`;

export const PasswordInputBox = styled('input')`
  font-size: ${({ theme }) => theme.font.xl};
  width: 180px;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 16px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  transition: 0.5s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    padding: min(2vw, 16px);
  }
`;

export const PasswordComment = styled('span')`
  font-size: ${({ theme }) => theme.font.m};
  width: 100%;
  height: 16px;
  line-height: 16px;
  display: block;
  color: ${({ theme }) => theme.color.red[300]};
  margin-top: 8px;
  margin-bottom: 48px;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    margin-top: min(1vw, 8px);
    margin-bottom: min(6vw, 48px);
  }
`;

export const TextLength = styled('span')<TextLengthProps>`
  font-size: ${({ theme }) => theme.font.m};
  width: 100%;
  height: 16px;
  line-height: 16px;
  text-align: right;
  display: block;
  color: ${({ theme, isMaxLength }) =>
    isMaxLength ? theme.color.red[400] : theme.color.gray[500]};
  margin-top: 8px;
  margin-bottom: 12px;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    margin-top: min(1vw, 8px);
    margin-bottom: min(1.5vw, 12px);
  }
`;

export const WriteIcon = styled(PencilFill)`
  width: 16px;
  height: 16px;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(2vw, 16px);
    height: min(2vw, 16px);
  }
`;

export const ReCAPTCHAWrapper = styled('div')`
  width: fit-content;
  margin-top: 40px;
  border-radius: 6px;
  overflow: hidden;
`;
