import './layout.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import pretendard from '@/font/pretendard';
import AuthProvider from '@/providers/authProvider';
import StyledComponentsProvider from '@/providers/styledComponentsProvider';
import ThemeModeProvider from '@/providers/themeModeProvider';
import ToastPopup from '@/theme/ToastPopup';

export const metadata: Metadata = {
  title: 'youngwookim.me',
  description: `Young-Woo Kim's Portfolio Page`,
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className={pretendard.className} suppressHydrationWarning>
        <StyledComponentsProvider>
          <ThemeModeProvider>
            <AuthProvider>
              <Header />
              <Menu />
              {children}
              <Footer />
              <ToastPopup />
            </AuthProvider>
          </ThemeModeProvider>
        </StyledComponentsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
