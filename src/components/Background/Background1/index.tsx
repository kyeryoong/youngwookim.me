import { observer } from 'mobx-react';

import store from '@/stores/store';

import * as S from './styled';

const Background1 = observer(() => {
  return (
    <S.BackgroundWrapper>
      <S.HeadingWrapper>
        <S.Heading $delay={500}>안녕하세요</S.Heading>
        <S.Heading $delay={1000}>프론트엔드 개발자</S.Heading>
        <S.Heading $delay={1500}>김영우입니다.</S.Heading>
      </S.HeadingWrapper>

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
