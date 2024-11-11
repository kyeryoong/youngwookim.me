import Image from 'next/image';
import { PersonCircle } from 'react-bootstrap-icons';
import styled from 'styled-components';

type MemberIdProps = {
  linkUrl?: string;
};

export const MemberWrapper = styled('div')`
  display: flex;
  gap: 12px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(3vw, 12px);
  }
`;

export const MemberImage = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 28px;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 56px);
    height: min(10vw, 56px);
    border-radius: min(5vw, 28px);
  }
`;

export const MemberNoImage = styled(PersonCircle)`
  width: min(8vw, 56px);
  height: min(8vw, 56px);
  color: ${({ theme }) => theme.color.gray[600]};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(8vw, 56px);
    height: min(8vw, 56px);
  }
`;

export const MemberInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(1vw, 4px);
  }
`;

export const MemberName = styled('div')`
  font-size: 1.2rem;
  font-weight: 500;
  word-break: keep-all;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  gap: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.6vw, 1.2rem);
    gap: min(2vw, 8px);
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
  font-size: 0.9rem;
  max-width: calc(90vw - 64px);
  word-break: keep-all;
  color: ${({ theme }) => theme.color.gray[500]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(2.7vw, 0.9rem);
  }
`;
