'use client';
import styled from 'styled-components';

export const PromptWrapper = styled('form')``;

export const CurrentLineCursor = styled('span')`
  font-size: 1.2rem;
  color: white;

  &::before {
    content: '> ';
  }
`;

export const CurrentLineInput = styled('input')`
  font-size: 1.2rem;
  height: 25px;
  line-height: 25px;
  color: white;
  border: none;
  outline: none;
  background-color: transparent;
`;

export const ResultLineWrapper = styled('div')``;

export const ResultLine = styled('span')`
  font-size: 1.2rem;
  height: 25px;
  line-height: 25px;
  color: white;
  display: block;
  white-space: pre;
`;
