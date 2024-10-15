import styled from 'styled-components';

export const ButtonWrapper = styled('button')`
  font-size: ${({ theme }) => theme.font.mobile.xl};
  border: none;
  border-radius: 6px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.color.gray[100]};
  background-color: ${({ theme }) => theme.color.gray[600]};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[500]};
  }

  &:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    padding: min(3vw, 12px) min(4vw, 16px);
  }
`;

export const IconWrapper = styled('div')`
  margin-right: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-right: min(1vw, 8px);
  }
`;

export const ChildrenWrapper = styled('div')``;
