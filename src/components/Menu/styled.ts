'use client';
import styled from 'styled-components';

export const MenuBackground = styled('div')`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  &.opened {
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
    z-index: 9000;
  }

  &.closed {
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? 'rgba(0, 0, 0, 0)' : 'rgba(255, 255, 255, 0)'};
    z-index: 0;
  }
`;

export const MenuWrapper = styled('div')`
  width: 50vw;
  min-width: 1000px;
  height: 60vh;
  min-height: 700px;
  border-radius: 15px;
  border: #282828;
  background-color: #101010;
  transition: 0.5s;
  display: grid;
  grid-template-rows: fit-content(100%) 1fr;

  &.opened {
    opacity: 1;
    z-index: 20000;
    transform: translateY(0px);
  }

  &.closed {
    opacity: 0;
    z-index: 0;
    transform: translateY(100px);
  }
`;

export const MenuTop = styled('div')`
  height: 50px;
  border-radius: 15px 15px 0px 0px;
  background-color: #282828;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`;

export const MenuTopButtonBase = styled('button')`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
`;

export const MenuTopButton = {
  Red: styled(MenuTopButtonBase)`
    background-color: #ff635a;
  `,

  Yellow: styled(MenuTopButtonBase)`
    background-color: #ffc12f;
  `,

  Blue: styled(MenuTopButtonBase)`
    background-color: #29ca41;
  `,
};

export const MenuBottom = styled('div')`
  padding: 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    border: 5px solid transparent;
    background-color: #505050;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    background-color: #101010;
    border-radius: 0px 0px 15px 0px;
  }
`;
