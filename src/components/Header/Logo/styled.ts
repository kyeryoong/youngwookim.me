'use client';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1000;
`;

export const LogoImage = styled(Image)`
  width: 50px;
  height: 50px;
`;

export const LogoTitle = styled('span')`
  font-size: 2rem;
  font-weight: 500;
  color: white;
`;
