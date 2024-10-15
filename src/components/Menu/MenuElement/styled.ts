import Link from 'next/link';
import styled from 'styled-components';

export const MenuElementWrapper = styled('button')`
  font-size: ${({ theme }) => theme.font.xxxl};
  font-weight: 500;
  height: 55px;
  line-height: 55px;
  color: white;
  background-color: transparent;
  border: none;
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  cursor: pointer;

  &:hover > div {
    width: 40px;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xxxl};
    height: 40px;
    line-height: 40px;

    &:hover > div {
      width: min(5vw, 40px);
    }
  }
`;

export const MenuElementCursor = styled('div')`
  width: 0px;
  height: 55px;
  text-align: left;
  transition: 0.5s;
  overflow: hidden;

  &::before {
    content: '> ';
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    height: 40px;
  }
`;

export const MenuElementText = styled(Link)``;
