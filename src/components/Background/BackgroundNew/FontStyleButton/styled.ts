import { TypeBold, TypeItalic } from 'react-bootstrap-icons';
import styled from 'styled-components';

type StyleButtonProps = {
  isApplied: boolean;
};

export const FontStyleButtonWrapper = styled('div')`
  height: 80px;
  display: flex;
  gap: 2px;
`;

export const BoldButton = styled(TypeBold)<StyleButtonProps>`
  width: 80px;
  height: 80px;
  background-color: ${({ theme, isApplied }) =>
    isApplied ? theme.color.gray[500] : theme.color.gray[700]};
  border-radius: 12px 0px 0px 12px;
  padding: 12%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isApplied }) =>
      isApplied ? theme.color.gray[400] : theme.color.gray[600]};
  }
`;

export const ItalicButton = styled(TypeItalic)<StyleButtonProps>`
  width: 80px;
  height: 80px;
  background-color: ${({ theme, isApplied }) =>
    isApplied ? theme.color.gray[500] : theme.color.gray[700]};
  border-radius: 0px 12px 12px 0px;
  padding: 12%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isApplied }) =>
      isApplied ? theme.color.gray[400] : theme.color.gray[600]};
  }
`;
