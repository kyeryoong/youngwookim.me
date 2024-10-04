import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import * as S from './styled';

const FontStyleButton = observer(() => {
  const { homeStore } = useStore();

  const handleBoldButtonClick = () => {
    homeStore.toggleBold();
  };

  const handleItalicButtonClick = () => {
    homeStore.toggleItalic();
  };

  return (
    <S.FontStyleButtonWrapper>
      <S.BoldButton onClick={handleBoldButtonClick} isApplied={homeStore.bold} />
      <S.ItalicButton onClick={handleItalicButtonClick} isApplied={homeStore.italic} />
    </S.FontStyleButtonWrapper>
  );
});

export default FontStyleButton;
