import Link from 'next/link';
import styled from 'styled-components';

export const LogoTitle = styled(Link)`
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
