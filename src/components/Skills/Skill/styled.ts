'use client';
import styled from 'styled-components';
import Image from 'next/image';

export const SkillWrapper = styled('div')<{
  rgb1: string;
  rgb2?: string;
}>`
  font-size: 1.5rem;
  font-weight: 600;
  width: fit-content;
  border-radius: 100px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 20px;
  background: ${({ rgb1, rgb2 }) => `linear-gradient(135deg, ${rgb1} 15%, ${rgb2} 85%)`};
  display: flex;
  align-items: center;
`;

export const SkillIcon = styled(Image)``;

export const SkillName = styled('span')<{
  textColor: string;
}>`
  color: ${({ textColor }) => textColor};
`;
