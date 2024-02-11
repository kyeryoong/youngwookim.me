import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '../../lib/registry';
import Header from '@/components/Header';
import Menu from '@/components/Menu';

export const metadata: Metadata = {
  title: 'youngwookim.me',
  description: `Young-Woo Kim's Portfolio Page`,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <Menu />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
