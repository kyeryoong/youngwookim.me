import { KeyFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

type HeaderWrapperProps = {
  showHeader: boolean;
};

export const HeaderWrapper = styled('header')<HeaderWrapperProps>`
  width: 100vw;
  height: 160px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: grid;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%);
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-right: 100px;
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.color.black}, transparent)`};
  z-index: ${({ showHeader }) => (showHeader ? 10000 : -1)};
  transition: 0.5s;
  opacity: ${({ showHeader }) => (showHeader ? 1 : 0)};

  @media (pointer: coarse) or (max-width: 1000px) {
    height: 100px;
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const AdminBanner = styled('section')`
  font-size: 0.85rem;
  width: 100vw;
  height: 24px;
  position: fixed;
  top: 0px;
  background-color: ${({ theme }) => theme.color.green[400]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const AdminIcon = styled(KeyFill)`
  width: 20px;
  height: 20px;
`;
