import styled from 'styled-components';

export const PostWrapper = styled('div')`
  width: 100%;
  height: 60px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[700]};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[900]};
  }

  &:nth-of-type(2) {
    border-top: 1px solid ${({ theme }) => theme.color.gray[700]};
  }
`;

export const PostTitle = styled('h2')`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray[100]};
`;

export const PostUserName = styled('h3')`
  font-size: 1.15rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray[100]};
`;
