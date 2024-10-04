import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import * as S from './styled';

const FontStyleButton = observer(() => {
  const handleBoldButtonClick = () => {
    store.toggleBold();
  };

  const handleItalicButtonClick = () => {
    store.toggleItalic();
  };

  return (
    <S.FontStyleButtonWrapper>
      <S.BoldButton onClick={handleBoldButtonClick} isApplied={store.bold} />
      <S.ItalicButton onClick={handleItalicButtonClick} isApplied={store.italic} />
    </S.FontStyleButtonWrapper>
  );
});

export default FontStyleButton;
