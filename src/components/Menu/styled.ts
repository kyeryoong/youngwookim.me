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
  height: 100vh;
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
  height: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '100vh' : '60vh')};
  min-height: 700px;
  border-radius: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '0px' : '15px')};
  border: #282828;
  background-color: #101010;
  transition: 0.5s;
  display: grid;
  grid-template-rows: fit-content(100%) 1fr;
  opacity: ${({ $isMenuOpened }) => ($isMenuOpened ? 1 : 0)};
  z-index: ${({ $isMenuOpened }) => ($isMenuOpened ? 20000 : 0)};
  transform: ${({ $isMenuOpened }) => ($isMenuOpened ? 'translateY(0px)' : 'translateY(100px)')};

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 90vw;
    min-width: 90vw;
    height: 75vh;
    min-height: 75vh;
  }
`;

export const MenuTop = styled('div')<MenuTopProps>`
  height: 48px;
  border-radius: ${({ $isMenuExpanded }) => ($isMenuExpanded ? '0px' : '15px 15px 0px 0px')};
  background-color: #282828;
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
`;
