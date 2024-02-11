'use client';
import styled from 'styled-components';

export const ButtonWrapper = styled('div')`
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: 0.5s;
  position: fixed;
  right: 100px;
  z-index: 12000;
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

  &.opened {
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

  &.opened {
    width: 0%;
    opacity: 0;
  }
`;

export const ButtonsElements3 = styled(ButtonsElements)`
  width: 75%;
  position: absolute;
  bottom: 15%;

  &.opened {
    width: 100%;
    transform: rotate(-45deg);
    bottom: 45%;
  }
`;
