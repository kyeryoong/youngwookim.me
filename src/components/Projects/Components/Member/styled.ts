import Image from 'next/image';
import { PersonCircle } from 'react-bootstrap-icons';
import styled from 'styled-components';

type MemberNameProps = {
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
    width: min(7vw, 56px);
    height: min(7vw, 56px);
    border-radius: min(3.5vw, 28px);
  }
`;

export const MemberNoImage = styled(PersonCircle)`
  width: 56px;
  height: 56px;
  color: ${({ theme }) => theme.color.gray[500]};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(7vw, 56px);
    height: min(7vw, 56px);
  }
`;

export const MemberInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  @media (pointer: coarse) or (max-width: 1000px) {
    gap: min(0.5vw, 4px);
  }
`;

export const MemberName = styled('span')<MemberNameProps>`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  cursor: ${({ linkUrl }) => linkUrl && 'pointer'};
  transition: 0.25s;

  &:hover {
    color: ${({ theme, linkUrl }) => linkUrl && theme.color.lightBlue[300]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
  }
`;

export const MemberPosition = styled('span')`
  font-size: ${({ theme }) => theme.font.m};
  color: ${({ theme }) => theme.color.gray[500]};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.m};
  }
`;
