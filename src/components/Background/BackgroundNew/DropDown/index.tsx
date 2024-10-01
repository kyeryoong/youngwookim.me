import { observer } from 'mobx-react-lite';
import { MouseEvent, useEffect, useRef, useState } from 'react';

import * as S from './styled';

type ColorType = 'White' | 'Red';

const DropDown = observer(() => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<ColorType>('White');
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleDropDownClick = () => {
    setIsOpened(!isOpened);
  };

  const handleColorClick = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectedColor(event.currentTarget.value as ColorType);
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
      <S.SelectedOption>{selectedColor}</S.SelectedOption>
      <S.Options isOpened={isOpened}>
        <S.Option onClick={handleColorClick} value="White">
          White
        </S.Option>
        <S.Option onClick={handleColorClick} value="Red">
          Red
        </S.Option>
      </S.Options>

      <S.DropDownArrow isOpened={isOpened} />
    </S.DropDownWrapper>
  );
});

export default DropDown;
