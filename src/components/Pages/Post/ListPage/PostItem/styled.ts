import Link from 'next/link';
import styled from 'styled-components';

export const PostItemWrapper = styled(Link)`
  width: 100%;
  padding: 20px 12px;
  display: grid;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%) fit-content(100%);
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray[800]};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[900]};
  }

  &:nth-of-type(1) {
    border-top: 1px solid ${({ theme }) => theme.color.gray[800]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    height: 48px;
    padding: 0px;
    gap: 8px;
  }
`;

export const PostIndex = styled('h3')`
  font-size: ${({ theme }) => theme.font.m};
  font-weight: 400;
  width: 40px;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[400]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    width: 30px;
  }
`;

export const PostTitle = styled('h2')`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;
  width: 100%;
  color: ${({ theme }) => theme.color.gray[100]};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;

export const PostTitleAdminPrefix = styled('p')`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue[500]};
  display: inline;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.l};
  }
`;

export const PostTitleRepliesSuffix = styled('p')`
  font-size: ${({ theme }) => theme.font.m};
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray[500]};
  display: inline;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
  }
`;

export const PostCreatedAt = styled('h3')`
  font-size: ${({ theme }) => theme.font.m};
  font-weight: 400;
  width: 120px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[400]};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-right: -10px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    width: 80px;
  }
`;

export const PostUserName = styled('h3')`
  font-size: ${({ theme }) => theme.font.m};
  font-weight: 400;
  width: 120px;
  text-align: center;
  color: ${({ theme }) => theme.color.gray[400]};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  margin-right: -10px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
    width: 80px;
    margin-right: 0px;
  }
`;
