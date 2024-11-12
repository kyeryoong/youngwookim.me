import Link from 'next/link';
import styled from 'styled-components';

type HeaderWrapperProps = {
  show: boolean;
};

export const HeaderWrapper = styled('header')<HeaderWrapperProps>`
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  height: 80px;
  color: ${({ theme }) => theme.color.gray[800]};
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  top: 0px;
  padding: 0px 100px;
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0%)' : 'translateY(-100%)')};
  transition: 0.5s;
  z-index: 10;

  @media (pointer: coarse) or (max-width: 1500px) {
    font-size: min(4.5vw, 1.5rem);
    height: min(8vh, 80px);
    padding: 0px 5vw;
    gap: min(3vw, 12px);
  }
`;

export const BackButton = styled(Link)``;
