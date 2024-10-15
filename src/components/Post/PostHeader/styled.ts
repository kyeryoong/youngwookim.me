import styled from 'styled-components';

export const PostHeaderWrapper = styled('div')`
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 40px;
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;

  @media (pointer: coarse) or (max-width: 1000px) {
    margin-bottom: min(5vw, 40px);
    gap: min(1.5vw, 12px);
  }
`;

export const PostHeaderTitle = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 600;
  line-height: 40px;
  margin-right: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
  }
`;
