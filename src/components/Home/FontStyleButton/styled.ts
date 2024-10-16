import { TypeBold, TypeItalic, TypeUnderline } from 'react-bootstrap-icons';
import styled from 'styled-components';

type StyleButtonProps = {
  isApplied: boolean;
};

export const FontStyleButtonWrapper = styled('div')`
  height: 80px;
  display: flex;
  gap: 2px;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: min(10vw, 80px);
    gap: min(0.25vw, 2px);
  }
`;

export const BoldButton = styled(TypeBold)<StyleButtonProps>`
  width: 80px;
  height: 80px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, isApplied }) =>
    isApplied ? theme.color.gray[500] : theme.color.gray[700]};
  border-radius: 12px 0px 0px 12px;
  padding: 16px;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isApplied }) =>
      isApplied ? theme.color.gray[400] : theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 80px);
    height: min(10vw, 80px);
    border-radius: min(1.5vw, 12px) 0px 0px min(1.5vw, 12px);
    padding: min(2vw, 16px);
  }
`;

export const ItalicButton = styled(TypeItalic)<StyleButtonProps>`
  width: 80px;
  height: 80px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, isApplied }) =>
    isApplied ? theme.color.gray[500] : theme.color.gray[700]};
  padding: 16px;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isApplied }) =>
      isApplied ? theme.color.gray[400] : theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 80px);
    height: min(10vw, 80px);
    padding: min(2vw, 16px);
  }
`;

export const UnderlineButton = styled(TypeUnderline)<StyleButtonProps>`
  width: 80px;
  height: 80px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme, isApplied }) =>
    isApplied ? theme.color.gray[500] : theme.color.gray[700]};
  border-radius: 0px 12px 12px 0px;
  padding: 16px;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isApplied }) =>
      isApplied ? theme.color.gray[400] : theme.color.gray[600]};
  }

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(10vw, 80px);
    height: min(10vw, 80px);
    border-radius: 0px min(1.5vw, 12px) min(1.5vw, 12px) 0px;
    padding: min(2vw, 16px);
  }
`;
