import { CaretDownFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type DropDownWrapperProps = {
  isOpened: boolean;
};

export const DropDownWrapper = styled('div')`
  width: 240px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SelectedOption = styled('div')`
  font-size: 2rem;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray[700]};
  border-radius: 12px;
  padding-left: 24px;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[600]};
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
`;

export const Option = styled('button')`
  font-size: 1.6rem;
  width: 100%;
  height: 64px;
  text-align: left;
  padding-left: 24px;
  background-color: ${({ theme }) => theme.color.gray[800]};
  border: none;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray[700]};
  }
`;

export const DropDownArrow = styled(CaretDownFill)<DropDownWrapperProps>`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.color.gray[500]};
  position: absolute;
  top: calc(50% - 12px);
  right: 20px;
  transform: ${({ isOpened }) => isOpened && 'rotate(180deg)'};
  cursor: pointer;
`;
