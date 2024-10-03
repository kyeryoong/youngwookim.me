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
  gap: 10px;
  position: relative;
`;

export const SearchField = styled('input')`
  font-size: 1.6rem;
  font-weight: 600;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  padding-left: 5px;
  border: none;
  outline: none;
`;

export const Placeholder = styled('label')<PlaceholderProps>`
  font-size: ${({ isFocused }) => (isFocused ? '1rem' : '1.5rem')};
  height: 30px;
  line-height: 30px;
  padding: 0px 5px;
  color: ${({ isFocused, theme }) => (isFocused ? theme.color.gray[400] : theme.color.gray[600])};
  background-color: ${({ theme }) => theme.color.black};
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? '-15px' : '25px')};
  transition: 0.25s;
`;

export const SearchIcon = styled(Search)<SearchIconProps>`
  width: 30px;
  height: 30px;
  color: ${({ disabled, theme }) => (disabled ? theme.color.gray[600] : theme.color.white)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: 0.5s;
`;
