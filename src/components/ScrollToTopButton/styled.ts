import Image from 'next/image';
import styled from 'styled-components';

type ScrollToTopButtonWrapperProps = {
  $show: boolean;
};

export const ScrollToTopButtonWrapper = styled('button')<ScrollToTopButtonWrapperProps>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[800]};
  position: fixed;
  bottom: ${({ $show }) => ($show ? '100px' : '-200px')};
  right: 100px;
  cursor: pointer;
  z-index: 1000;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[700]};
    transform: scale(1.2);
  }
`;

export const ScrollArrow = styled(Image)`
  width: 30px;
  height: 30px;
  filter: ${({ theme }) => (theme.mode === 'dark' ? 'invert(1)' : 'invert(0)')};
`;
