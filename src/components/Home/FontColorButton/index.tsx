import { observer } from 'mobx-react-lite';
import { MouseEvent, useState } from 'react';

import { useStore } from '@/stores';

import * as S from './styled';

const FontColorButton = observer(() => {
  const { homeStore } = useStore();

  const colorPalette = [
    '#FFADAD',
    '#FFD6A5',
    '#FDFFB6',
    '#CAFFBF',
    '#9BF6FF',
    '#A0C4FF',
    '#BDB2FF',
    '#FFC6FF',
    'white',
    'black',
  ];

  const [isTextColorSelectorOpened, setIsTextColorSelectorOpened] = useState<boolean>(false);

  const handleTextColorButtonClick = () => {
    setIsTextColorSelectorOpened(!isTextColorSelectorOpened);
  };

  const handleColorElementButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    homeStore.setTextColor(event.currentTarget.value);
    setIsTextColorSelectorOpened(false);
  };

  return (
    <S.FontColorButtonWrapper>
      <S.TextColorButton onClick={handleTextColorButtonClick}>
        <S.TextColorIcon />
        <S.TextColor selectedColor={homeStore.textColor} />
      </S.TextColorButton>

      <S.ColorPicker isOpened={isTextColorSelectorOpened}>
        {colorPalette.map((color) => (
          <S.ColorElementButton
            key={color}
            color={color}
            value={color}
            onClick={handleColorElementButtonClick}
          />
        ))}
      </S.ColorPicker>
    </S.FontColorButtonWrapper>
  );
});

export default FontColorButton;
