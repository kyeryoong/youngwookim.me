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

  const handleUnderlineButtonClick = () => {
    homeStore.toggleUnderline();
  };

  return (
    <S.FontStyleButtonWrapper>
      <S.BoldButton onClick={handleBoldButtonClick} isApplied={homeStore.bold} />
      <S.ItalicButton onClick={handleItalicButtonClick} isApplied={homeStore.italic} />
      <S.UnderlineButton onClick={handleUnderlineButtonClick} isApplied={homeStore.underline} />
    </S.FontStyleButtonWrapper>
  );
});

export default FontStyleButton;
