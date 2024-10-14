import styled from 'styled-components';

export const Button = styled('button')`
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[700]};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray[400]};
    background-color: ${({ theme }) => theme.color.gray[600]};
    cursor: not-allowed;
  }
`;
