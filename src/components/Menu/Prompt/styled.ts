'use client';
import styled from 'styled-components';

export const PromptWrapper = styled('form')`
  margin-top: 10px;
`;

export const CurrentLineCursor = styled('span')`
  font-family: 'JetBrains Mono';
  font-size: 1.2rem;
  line-height: 25px;
  color: white;

  &::before {
    content: '> ';
  }
`;

export const CurrentLineInput = styled('input')`
  font-family: 'JetBrains Mono', 'Pretendard';
  font-size: 1.2rem;
  width: calc(100% - 30px);
  height: 25px;
  line-height: 25px;
  color: #ffffff;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const ResultLineWrapper = styled('div')``;

export const ResultLine = styled('span')`
  font-family: 'JetBrains Mono', 'Pretendard';
  font-size: 1.2rem;
  line-height: 25px;
  color: #ffffff;
  display: block;
  white-space: pre;
`;
