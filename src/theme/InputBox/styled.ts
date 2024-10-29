import styled from 'styled-components';

type TextLengthProps = {
  isMaxLength: boolean;
};

export const InputBoxWrapper = styled('div')``;

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

export const InputBox = styled('input')`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 600;
  width: 100%;
  line-height: 24px;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 12px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[900]};
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray[700]};
  }
`;

export const TextArea = styled('textarea')`
  font-size: ${({ theme }) => theme.font.l};
  font-weight: 400;
  width: 100%;
  line-height: 24px;
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 12px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[900]};
  resize: none;
  transition: 0.5s;

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray[700]};
  }
`;

export const TextLength = styled('label')<TextLengthProps>`
  font-size: ${({ theme }) => theme.font.m};
  width: 100%;
  color: ${({ theme, isMaxLength }) =>
    isMaxLength ? theme.color.red[300] : theme.color.gray[400]};
  text-align: right;
  display: block;
  margin-top: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    margin-top: min(1vw, 8px);
  }
`;
