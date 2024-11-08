import Image from 'next/image';
import { PersonCircle } from 'react-bootstrap-icons';
import styled from 'styled-components';

type MemberIdProps = {
  linkUrl?: string;
};

export const MemberWrapper = styled('div')`
  display: flex;
  gap: 16px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(2vw, 16px);
  }
`;

export const MemberImage = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 28px;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(8vw, 56px);
    height: min(8vw, 56px);
    border-radius: min(4vw, 28px);
  }
`;

export const MemberNoImage = styled(PersonCircle)`
  width: min(8vw, 56px);
  height: min(8vw, 56px);
  color: ${({ theme }) => theme.color.gray[500]};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(8vw, 56px);
    height: min(8vw, 56px);
  }
`;

export const MemberInfo = styled('div')`
  min-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(0.5vw, 4px);
  }
`;

export const MemberName = styled('div')`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;
  max-width: calc(90vw - 60px);
  word-break: keep-all;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  gap: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
  }
`;

export const MemberId = styled('span')<MemberIdProps>`
  cursor: ${({ linkUrl }) => linkUrl && 'pointer'};
  transition: 0.25s;

  &:hover {
    color: ${({ theme, linkUrl }) => linkUrl && theme.color.lightBlue[300]};
  }
`;

export const MemberPosition = styled('span')`
  font-size: ${({ theme }) => theme.font.m};
  max-width: calc(90vw - 64px);
  word-break: keep-all;
  color: ${({ theme }) => theme.color.gray[500]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
  }
`;
