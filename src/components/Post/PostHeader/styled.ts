import styled from 'styled-components';

export const PostHeaderWrapper = styled('div')`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 40px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const PostHeaderTitle = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 600;
  line-height: 40px;
  margin-right: auto;
`;
