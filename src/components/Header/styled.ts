import styled from 'styled-components';

export const HeaderWrapper = styled('header')`
  width: 100vw;
  height: 160px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  background: ${({ theme }) => `linear-gradient(180deg, ${theme.color.black}, transparent)`};
  z-index: 10000;
`;
