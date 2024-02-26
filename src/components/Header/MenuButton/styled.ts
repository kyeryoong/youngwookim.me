import styled from 'styled-components';

type MenuButtonsElementsProps = {
  isMenuOpened: boolean;
};

export const MenuButtonWrapper = styled('div')`
  width: 40px;
  height: 40px;
  position: relative;
  transition: 0.5s;
  z-index: 12000;
  cursor: pointer;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
`;

export const MenuButtonsElements = styled('div')`
  height: 10%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const MenuButtonsElements1 = styled(MenuButtonsElements)<MenuButtonsElementsProps>`
  position: absolute;
  width: ${({ isMenuOpened }) => (isMenuOpened ? '100%' : '50%')};
  top: ${({ isMenuOpened }) => (isMenuOpened ? '45%' : '15%')};
  transform: ${({ isMenuOpened }) => isMenuOpened && 'rotate(45deg)'};
`;

export const MenuButtonsElements2 = styled(MenuButtonsElements)<MenuButtonsElementsProps>`
  position: absolute;
  width: ${({ isMenuOpened }) => (isMenuOpened ? '0%' : '100%')};
  top: 45%;
  opacity: ${({ isMenuOpened }) => (isMenuOpened ? '0' : '1')};
`;

export const MenuButtonsElements3 = styled(MenuButtonsElements)<MenuButtonsElementsProps>`
  position: absolute;
  width: ${({ isMenuOpened }) => (isMenuOpened ? '100%' : '75%')};
  bottom: ${({ isMenuOpened }) => (isMenuOpened ? '45%' : '15%')};
  transform: ${({ isMenuOpened }) => isMenuOpened && 'rotate(-45deg)'};
`;
