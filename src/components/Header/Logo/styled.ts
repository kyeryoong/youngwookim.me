'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

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
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
`;
