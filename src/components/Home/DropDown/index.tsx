import { observer } from 'mobx-react-lite';
import { MouseEvent, useEffect, useRef, useState } from 'react';

import { useStore } from '@/stores';

import * as S from './styled';

const DropDown = observer(() => {
  const { themeStore } = useStore();

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleDropDownClick = () => {
    setIsOpened(!isOpened);
  };

  const handleColorClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value === 'Light') {
      themeStore.setTheme('light');
    } else {
      themeStore.setTheme('dark');
    }
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
      <S.SelectedOption>{themeStore.theme === 'dark' ? 'Dark' : 'Light'}</S.SelectedOption>
      <S.Options isOpened={isOpened}>
        <S.Option onClick={handleColorClick} value="Light">
          Light
        </S.Option>
        <S.Option onClick={handleColorClick} value="Dark">
          Dark
        </S.Option>
      </S.Options>

      <S.DropDownArrow isOpened={isOpened} />
    </S.DropDownWrapper>
  );
});

export default DropDown;
