import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 12000;
`;

export const LogoImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const LogoTitle = styled('h1')`
  font-size: ${({ theme }) => theme.font.xxl};
  font-weight: 500;
  color: ${({ theme }) => theme.color.white};
`;
