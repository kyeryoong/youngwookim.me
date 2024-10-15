import styled from 'styled-components';

export const PostItemWrapper = styled('div')`
  width: 100%;
  height: 64px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[600]};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[800]};
  }

  &:nth-of-type(2) {
    border-top: 1px solid ${({ theme }) => theme.color.gray[600]};
  }
`;

export const PostTitle = styled('h2')`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray[100]};
`;

export const PostUserName = styled('h3')`
  font-size: ${({ theme }) => theme.font.m};
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray[100]};
`;
