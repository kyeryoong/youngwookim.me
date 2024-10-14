import styled from 'styled-components';

export const PostHeaderWrapper = styled('div')`
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const PostHeaderTitle = styled('h1')`
  font-size: 2.4rem;
  font-weight: 600;
  margin-right: auto;
`;
