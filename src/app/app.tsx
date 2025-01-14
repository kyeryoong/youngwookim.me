import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import AuthProvider from '@/providers/authProvider';
import StyledComponentsProvider from '@/providers/styledComponentsProvider';
import ThemeModeProvider from '@/providers/themeModeProvider';
import ToastPopup from '@/theme/ToastPopup';

type AppProps = {
  children: ReactNode;
};

const App = ({ children }: AppProps) => {
  return (
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
  );
};

export default App;
