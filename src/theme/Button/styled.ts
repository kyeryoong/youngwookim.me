import styled from 'styled-components';

export const ButtonWrapper = styled('button')`
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[600]};
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[500]};
  }

  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled('div')`
  margin-right: 10px;
`;

export const ChildrenWrapper = styled('div')``;
