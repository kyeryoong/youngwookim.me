import styled from 'styled-components';

type ButtonWrapperProps = {
  type?: 'default' | 'delete';
  backgroundColor?: string;
  hoveredBackgroundColor?: string;
  textColor?: string;
};

type IconWrapperProps = {
  disabled: boolean;
};

export const ButtonWrapper = styled('button')<ButtonWrapperProps>`
  font-size: ${({ theme }) => theme.font.mobile.xxl};
  height: 48px;
  border: none;
  border-radius: 6px;
  padding: 0px 20px;
  color: ${({ theme, type }) => (type === 'delete' ? 'white' : theme.color.gray[100])};
  color: ${({ textColor }) => textColor};
  background-color: ${({ theme, type }) =>
    type === 'delete' ? theme.color.red[400] : theme.color.gray[900]};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme, type }) =>
      type === 'delete' ? theme.color.red[300] : theme.color.gray[800]};
    background-color: ${({ hoveredBackgroundColor }) => hoveredBackgroundColor};
  }

  &:active {
    background-color: ${({ theme, type }) =>
      type === 'delete' ? theme.color.red[200] : theme.color.gray[700]};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.gray[800]};
    background-color: ${({ theme, type }) =>
      type === 'delete' ? theme.color.red[0] : theme.color.gray[950]};
    cursor: not-allowed;
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ theme }) => theme.font.mobile.xl};
    height: 40px;
    padding: 0px min(4vw, 16px);
  }
`;

export const IconWrapper = styled('div')<IconWrapperProps>`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme, disabled }) => disabled && theme.color.gray[800]};
    transition: 0.5s;
  }
`;

export const ChildrenWrapper = styled('div')`
  font-weight: 500;
`;
