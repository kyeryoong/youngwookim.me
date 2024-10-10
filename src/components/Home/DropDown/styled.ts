import { CaretDownFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type DropDownWrapperProps = {
  isOpened: boolean;
};

export const DropDownWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;
`;

export const SelectedOption = styled('div')`
  font-size: 2rem;
  width: 240px;
  height: 80px;
  line-height: 80px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[700]};
  border-radius: 12px;
  padding-left: 10%;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(4vw, 2rem);
    width: min(30vw, 240px);
    height: min(10vw, 80px);
    line-height: min(10vw, 80px);
    border-radius: min(1.5vw, 12px);
  }
`;

export const Options = styled('div')<DropDownWrapperProps>`
  width: 100%;
  border-radius: 12px;
  padding: 16px 0px;
  background-color: ${({ theme }) => theme.color.gray[800]};
  position: absolute;
  top: 88px;
  overflow: hidden;
  display: ${({ isOpened }) => !isOpened && 'none'};

  @media (pointer: coarse) or (max-width: 1000px) {
    border-radius: min(1.5vw, 12px);
    padding: min(2vw, 16px) 0px;
    top: 11vw;
  }
`;

export const Option = styled('button')`
  font-size: 1.6rem;
  width: 100%;
  height: 64px;
  text-align: left;
  padding-left: 10%;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[800]};
  border: none;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[700]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.2vw, 1.6rem);
    height: min(8vw, 64px);
  }
`;

export const DropDownArrow = styled(CaretDownFill)<DropDownWrapperProps>`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.gray[500]};
  position: absolute;
  top: calc(50% - 12px);
  right: 10%;
  transform: ${({ isOpened }) => isOpened && 'rotate(180deg)'};
  cursor: pointer;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(3vw, 24px);
    height: min(3vw, 24px);
    top: calc(50% - min(1.5vw, 12px));
  }
`;
