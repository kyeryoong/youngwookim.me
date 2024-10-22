import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const LogoWrapper = styled(Link)`
  z-index: 12000;
`;

export const LogoImage = styled(Image)`
  width: 50px;
  height: 50px;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoTitle = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.color.gray[400]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxl};
  }
`;
