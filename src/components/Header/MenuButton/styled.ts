'use client';
import styled from 'styled-components';

export const ButtonWrapper = styled('div')`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.5s;
  position: fixed;
  z-index: 100;

  &.show {
    right: 40px;
  }

  &.hide {
    right: 100px;
  }
`;

export const ButtonsElements = styled('div')`
  height: 10%;
  border-radius: 10px;
  background-color: white;
  transition: 0.5s;
`;

export const ButtonsElements1 = styled(ButtonsElements)`
  width: 50%;
  position: absolute;
  top: 15%;

  &.show {
    width: 100%;
    transform: rotate(45deg);
    top: 45%;
  }
`;

export const ButtonsElements2 = styled(ButtonsElements)`
  width: 100%;
  position: absolute;
  top: 45%;
  opacity: 1;

  &.show {
    width: 0%;
    opacity: 0;
  }
`;

export const ButtonsElements3 = styled(ButtonsElements)`
  width: 75%;
  position: absolute;
  bottom: 15%;

  &.show {
    width: 100%;
    transform: rotate(-45deg);
    bottom: 45%;
  }
`;
