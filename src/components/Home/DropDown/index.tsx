import { observer } from 'mobx-react-lite';
import { MouseEvent, useEffect, useRef, useState } from 'react';

import { useStore } from '@/stores';
import { FontSizeType } from '@/stores/homeStore';

import * as S from './styled';

const DropDown = observer(() => {
  const { homeStore } = useStore();

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleDropDownClick = () => {
    setIsOpened(!isOpened);
  };

  const handleColorClick = (event: MouseEvent<HTMLButtonElement>) => {
    homeStore.setFontsize(Number(event.currentTarget.value) as FontSizeType);
  };

  useEffect(() => {
    const handleOutsideClick = (event: Event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [dropDownRef]);

  return (
    <S.DropDownWrapper onClick={handleDropDownClick} ref={dropDownRef}>
      <S.SelectedOption>{homeStore.fontSize}pt</S.SelectedOption>
      <S.Options isOpened={isOpened}>
        <S.Option onClick={handleColorClick} value={8}>
          8pt
        </S.Option>
        <S.Option onClick={handleColorClick} value={9}>
          9pt
        </S.Option>
        <S.Option onClick={handleColorClick} value={10}>
          10pt
        </S.Option>
        <S.Option onClick={handleColorClick} value={12}>
          12pt
        </S.Option>
        <S.Option onClick={handleColorClick} value={15}>
          15pt
        </S.Option>
      </S.Options>

      <S.DropDownArrow isOpened={isOpened} />
    </S.DropDownWrapper>
  );
});

export default DropDown;
