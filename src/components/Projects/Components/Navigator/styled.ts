import styled from 'styled-components';

type NavigatorWrapperProps = {
  isNavigatorFixed: boolean;
};

export const NavigatorWrapper = styled('div')<NavigatorWrapperProps>`
  width: 200px;
  height: 200px;
  background-color: red;
  position: ${({ isNavigatorFixed }) => (isNavigatorFixed ? 'absolute' : 'relative')};
`;
