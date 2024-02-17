import styled from 'styled-components';

type ButtonsElementsProps = {
  isMenuOpened: boolean;
};

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
  background-color: ${({ theme }) => theme.color.white};
  transition: 0.5s;
`;

export const ButtonsElements1 = styled(ButtonsElements)<ButtonsElementsProps>`
  position: absolute;
  width: ${({ isMenuOpened }) => (isMenuOpened ? '100%' : '50%')};
  top: ${({ isMenuOpened }) => (isMenuOpened ? '45%' : '15%')};
  transform: ${({ isMenuOpened }) => isMenuOpened && 'rotate(45deg)'};
`;

export const ButtonsElements2 = styled(ButtonsElements)<ButtonsElementsProps>`
  position: absolute;
  width: ${({ isMenuOpened }) => (isMenuOpened ? '0%' : '100%')};
  top: 45%;
  opacity: ${({ isMenuOpened }) => (isMenuOpened ? '0' : '1')};
`;

export const ButtonsElements3 = styled(ButtonsElements)<ButtonsElementsProps>`
  position: absolute;
  width: ${({ isMenuOpened }) => (isMenuOpened ? '100%' : '75%')};
  bottom: ${({ isMenuOpened }) => (isMenuOpened ? '45%' : '15%')};
  transform: ${({ isMenuOpened }) => isMenuOpened && 'rotate(-45deg)'};
`;
