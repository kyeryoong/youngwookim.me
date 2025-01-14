import './layout.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import pretendard from '@/font/pretendard';

import App from './app';

export const metadata: Metadata = {
  title: 'youngwookim.me',
  description: `Young-Woo Kim's Portfolio Page`,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className={pretendard.className} suppressHydrationWarning>
        <App>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;
