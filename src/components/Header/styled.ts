import { KeyFill, XLg } from 'react-bootstrap-icons';
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
  font-size: 1rem;
  font-weight: 300;
  width: 100vw;
  height: 32px;
  line-height: 32px;
  position: fixed;
  top: 0px;
  background-color: ${({ theme }) => theme.color.green[500]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: 0.8rem;
    height: 20px;
  }
`;

export const AdminIcon = styled(KeyFill)`
  width: 24px;
  height: 24px;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 18px;
    height: 18px;
  }
`;

export const AdminLogOutButton = styled(XLg)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  cursor: pointer;

  @media (pointer: coarse) or (max-width: 1000px) {
    width: 15px;
    height: 15px;
    right: 7.5px;
  }
`;
