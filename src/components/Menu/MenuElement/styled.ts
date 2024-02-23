import Link from 'next/link';
import styled from 'styled-components';

export const MenuElementWrapper = styled('button')`
  font-size: 2.5rem;
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
`;

export const MenuElementCursor = styled('div')`
  width: 0px;
  height: 60px;
  text-align: left;
  transition: 0.5s;
  overflow: hidden;

  &::before {
    content: '> ';
  }
`;

export const MenuElementText = styled(Link)``;
