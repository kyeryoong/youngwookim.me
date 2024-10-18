import './layout.css';

import type { Metadata } from 'next';

import pretendard from '@/font/pretendard';

import StyledComponentsRegistry from '../../lib/registry';
import App from './app';

export const metadata: Metadata = {
  title: 'youngwookim.me',
  description: `Young-Woo Kim's Portfolio Page`,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className={pretendard.className} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <App>{children}</App>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
