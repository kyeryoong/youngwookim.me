import styled from 'styled-components';

type MenuBackgroundProps = {
  $isMenuOpened: boolean;
  $isMenuExpanded: boolean;
};

type MenuWrapperProps = {
  $isMenuOpened: boolean;
  $isMenuExpanded: boolean;
};

type MenuTopProps = {
  $isMenuExpanded: boolean;
};

export const MenuBackground = styled('div')<MenuBackgroundProps>`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  background-color: ${({ theme, $isMenuOpened }) =>
    theme.mode === 'dark'
      ? `rgba(0, 0, 0, ${$isMenuOpened ? 0.5 : 0})`
      : `rgba(150, 150, 150, ${$isMenuOpened ? 0.5 : 0})`};
  z-index: ${({ $isMenuOpened, $isMenuExpanded }) =>
    $isMenuOpened ? ($isMenuExpanded ? 110000 : 9000) : -1};
`;

export const MenuWrapper = styled('div')<MenuWrapperProps>`
  width: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '100vw' : '50vw')};
  min-width: 1000px;
  height: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '100dvh' : '64dvh')};
  min-height: 700px;
  border-radius: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '0px' : '15px')};
  border: 1px solid #363636;
  background-color: #101010;
  box-shadow: 0px 0px 12px 5px rgba(50, 50, 50, 0.3);
  transition: 0.5s;
  position: relative;

  display: grid;
  grid-template-rows: fit-content(100%) 1fr;
  opacity: ${({ $isMenuOpened }) => ($isMenuOpened ? 1 : 0)};
  z-index: ${({ $isMenuOpened }) => ($isMenuOpened ? 20000 : 0)};
  transform: ${({ $isMenuOpened }) => ($isMenuOpened ? 'translateY(0px)' : 'translateY(100px)')};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '100vw' : '90vw')};
    min-width: 90vw;
    height: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '100dvh' : '80dvh')};
    min-height: 80dvh;
    position: absolute;
    top: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '0px' : '100px')};
  }
`;

export const MenuTop = styled('div')<MenuTopProps>`
  height: 48px;
  border-radius: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '0px' : '15px 15px 0px 0px')};
  background-color: #363636;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 20px;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: min(12vw, 48px);
    gap: min(2vw, 8px);
    padding: min(5vw, 20px);
  }
`;

export const MenuTopButtonBase = styled('button')`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.25);
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(4vw, 16px);
    height: min(4vw, 16px);
  }
`;

export const MenuTopButton = {
  Red: styled(MenuTopButtonBase)`
    background-color: #ff635a;
  `,

  Yellow: styled(MenuTopButtonBase)`
    background-color: #ffc12f;
  `,

  Green: styled(MenuTopButtonBase)`
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

  @media (pointer: coarse) or (max-width: 1000px) {
    padding: min(5vw, 20px);
  }
`;
