import { ReactNode } from 'react';

import * as S from './styled';

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <S.LayoutWrapper>{children}</S.LayoutWrapper>;
};

export default Layout;
