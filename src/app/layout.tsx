import './layout.css';

import type { Metadata } from 'next';

import StyledComponentsRegistry from '../../lib/registry';
import App from './app';

export const metadata: Metadata = {
  title: 'youngwookim.me',
  description: `Young-Woo Kim's Portfolio Page`,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <App>{children}</App>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
