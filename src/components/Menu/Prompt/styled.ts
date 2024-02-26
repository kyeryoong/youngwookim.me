import styled from 'styled-components';

export const PromptWrapper = styled('form')`
  margin-top: 10px;
`;

export const CurrentLineCursor = styled('span')`
  font-family: 'JetBrains Mono';
  font-size: ${({ theme }) => theme.font.l};
  line-height: 25px;
  color: white;

  &::before {
    content: '> ';
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;

export const CurrentLineInput = styled('input')`
  font-family: 'JetBrains Mono', 'Pretendard';
  font-size: ${({ theme }) => theme.font.l};
  width: calc(100% - 30px);
  height: 25px;
  line-height: 25px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;

export const ResultLineWrapper = styled('div')``;

export const ResultLine = styled('span')`
  font-family: 'JetBrains Mono', 'Pretendard';
  font-size: ${({ theme }) => theme.font.l};
  line-height: 25px;
  color: #ffffff;
  display: block;
  white-space: pre;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;
