import { observer } from 'mobx-react-lite';
import { MouseEvent, useEffect, useRef, useState } from 'react';

import store from '@/stores/store';

import * as S from './styled';

const DropDown = observer(() => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleDropDownClick = () => {
    setIsOpened(!isOpened);
  };

  const handleColorClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value === 'Light') {
      store.setTheme('light');
    } else {
      store.setTheme('dark');
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
      <S.SelectedOption>{store.theme === 'dark' ? 'Dark' : 'Light'}</S.SelectedOption>
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
