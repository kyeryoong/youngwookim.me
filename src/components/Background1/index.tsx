import { observer } from 'mobx-react';

import store from '@/stores/store';

import * as S from './styled';

const Background1 = observer(() => {
  return (
    <S.BackgroundWrapper>
      <S.Asterisk
        src={store.theme === 'dark' ? '/home/asterisk_dark.mp4' : '/home/asterisk_light.mp4'}
        autoPlay
        muted
        loop
      />
      <S.ComponentSymbol
        src={
          store.theme === 'dark'
            ? '/home/component_symbol_dark.mp4'
            : '/home/component_symbol_light.mp4'
        }
        autoPlay
        muted
        loop
      />
      <S.ArrowFunction
        src={
          store.theme === 'dark'
            ? '/home/arrow_function_dark.mp4'
            : '/home/arrow_function_light.mp4'
        }
        autoPlay
        muted
        loop
      />
    </S.BackgroundWrapper>
  );
});

export default Background1;
