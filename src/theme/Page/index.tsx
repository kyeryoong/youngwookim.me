'use client';

import { ReactNode } from 'react';

import * as S from './styled';

type PageProps = {
  children?: ReactNode;
  customStyle?: React.CSSProperties;
};

const Page = ({ children, customStyle }: PageProps) => {
  return <S.PageWrapper style={customStyle}>{children}</S.PageWrapper>;
};

export default Page;
