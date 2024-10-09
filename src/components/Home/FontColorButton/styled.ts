import { Fonts } from 'react-bootstrap-icons';
import styled from 'styled-components';

type TextColorProps = {
  selectedColor: string;
};

type TextColorPickerProps = {
  isOpened: boolean;
};

type ColorElementButtonProps = {
  color: string;
};

export const FontColorButtonWrapper = styled('div')`
  height: 80px;
  position: relative;
  display: flex;
  gap: 2px;

  @media (pointer: coarse) or (max-width: 800px) {
    height: min(10vw, 80px);
    gap: min(0.25vw, 2px);
  }
`;

export const TextColorButton = styled('button')`
  width: 80px;
  height: 80px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[700]};
  border: none;
  border-radius: 12px;
  padding: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 800px) {
    width: min(10vw, 80px);
    height: min(10vw, 80px);
    border-radius: min(1.5vw, 12px);
  }
`;

export const TextColorIcon = styled(Fonts)`
  width: 70%;
  height: 70%;
  color: ${({ theme }) => theme.color.white};
`;

export const TextColor = styled('div')<TextColorProps>`
  width: 100%;
  height: 15%;
  border-radius: 2px;
  background-color: ${({ selectedColor }) => selectedColor};
`;

export const ColorPicker = styled('div')<TextColorPickerProps>`
  border-radius: 12px;
  padding: 12px;
  position: absolute;
  top: 88px;
  background-color: ${({ theme }) => theme.color.gray[700]};
  opacity: ${({ isOpened }) => (isOpened ? 1 : 0)};
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2px;

  @media (pointer: coarse) or (max-width: 800px) {
    border-radius: min(1.5vw, 12px);
    padding: min(1.5vw, 12px);
    top: 11vw;
    gap: min(0.25vw, 2px);
  }
`;

export const ColorElementButton = styled('button')<ColorElementButtonProps>`
  width: 40px;
  height: 40px;
  border: none;
  margin: 0px;
  padding: 0px;
  border-radius: 6px;
  background-color: ${({ theme, color }) =>
    color === 'white' ? theme.color.white : color === 'black' ? theme.color.black : color};
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    transform: scale(1.25);
  }

  @media (pointer: coarse) or (max-width: 800px) {
    width: min(5vw, 40px);
    height: min(5vw, 40px);
    border-radius: min(0.75vw, 6px);
  }
`;
