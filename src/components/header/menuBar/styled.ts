'use client';
import styled from 'styled-components';

export const Background = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0px;
  left: 0px;
  transition: 0.5s;
  z-index: 1;

  &.show {
    opacity: 0.5;
  }

  &.hide {
    opacity: 0;
  }
`;

export const MeunBarWrapper = styled('div')`
  width: 500px;
  height: 100vh;
  background-color: rgb(30, 30, 30);
  padding-top: 150px;
  padding-bottom: 100px;
  padding-left: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: fixed;
  transition: 0.5s;
  z-index: 10;

  &.show {
    top: 0px;
    right: 0px;
    opacity: 1;
  }

  &.hide {
    top: 0px;
    right: -500px;
    opacity: 0;
  }
`;

export const Menu = styled('button')`
  font-size: 2.5rem;
  height: 50px;
  line-height: 50px;
  color: white;
  background-color: transparent;
  border: none;
  transition: 0.5s;

  &:hover {
    color: aqua;
    cursor: pointer;
  }
`;
