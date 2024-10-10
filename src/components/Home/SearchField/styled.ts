import { Search } from 'react-bootstrap-icons';
import styled from 'styled-components';

type PlaceholderProps = {
  isFocused: boolean;
};

type SearchIconProps = {
  disabled: boolean;
};

export const SearchFieldWrapper = styled('div')`
  width: 400px;
  height: 80px;
  background-color: transparent;
  border-radius: 12px;
  border: ${({ theme }) => `2px solid ${theme.color.gray[500]}`};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(50vw, 400px);
    height: min(10vw, 80px);
    border-radius: min(1.5vw, 12px);
    padding: min(1.25vw, 10px) min(2.5vw, 20px);
    gap: min(1.5vw, 12px);
  }
`;

export const SearchField = styled('input')`
  font-size: 1.6rem;
  font-weight: 600;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: none;
  outline: none;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.2vw, 1.6rem);
    width: min(50vw, 400px);
    height: min(10vw, 80px);
  }
`;

export const Placeholder = styled('label')<PlaceholderProps>`
  font-size: ${({ isFocused }) => (isFocused ? '1rem' : '1.6rem')};
  height: 32px;
  line-height: 32px;
  padding: 0px 4px;
  color: ${({ isFocused, theme }) => (isFocused ? theme.color.gray[400] : theme.color.gray[600])};
  background-color: ${({ theme }) => theme.color.black};
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? '-16px' : 'calc(50% - 16px)')};
  transition: 0.25s;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: ${({ isFocused }) => (isFocused ? 'min(2vw, 1rem)' : 'min(3.2vw, 1.6rem)')};
    height: min(4vw, 32px);
    line-height: min(4vw, 32px);
    padding: 0px min(0.5vw, 4px);
    top: ${({ isFocused }) => (isFocused ? 'max(-2vw, -16px)' : 'calc(50% - min(2vw, 16px))')};
  }
`;

export const SearchIcon = styled(Search)<SearchIconProps>`
  width: 32px;
  height: 32px;
  color: ${({ disabled, theme }) => (disabled ? theme.color.gray[600] : theme.color.white)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: min(4vw, 32px);
    height: min(4vw, 32px);
  }
`;
