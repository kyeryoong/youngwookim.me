import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

import { useStore } from '@/stores';

import * as S from './styled';

const Text = observer(({ children }: { children: ReactNode }) => {
  const { homeStore } = useStore();

  return (
    <S.Text isBold={homeStore.bold} isItalic={homeStore.italic} fontSize={homeStore.fontSize}>
      {children}
    </S.Text>
  );
});

export default Text;
