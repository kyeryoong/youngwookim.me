import { observer } from 'mobx-react-lite';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

import * as S from './styled';

const SearchField = observer(() => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchKey, setSearchKey] = useState<string>('');

  const handleSearchFieldFocus = () => {
    setIsFocused(true);
  };

  const handleSearchFieldBlur = () => {
    if (searchKey.trim() === '') {
      setIsFocused(false);
    }
  };

  const handleSearchFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  const openNewWindow = () => {
    window.open(`https://www.google.com/search?q=${searchKey}`);
  };

  const handleSearchIconClick = () => {
    openNewWindow();
  };

  const handleKeyboardEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchKey.trim() !== '') {
      openNewWindow();
    }
  };

  return (
    <S.SearchFieldWrapper onFocus={handleSearchFieldFocus} onBlur={handleSearchFieldBlur}>
      <S.SearchField
        value={searchKey}
        onChange={handleSearchFieldChange}
        onKeyDown={handleKeyboardEnter}
        spellCheck={false}
      />
      <S.SearchIcon onClick={handleSearchIconClick} disabled={searchKey.trim() === ''} />

      <S.Placeholder isFocused={isFocused}>Search</S.Placeholder>
    </S.SearchFieldWrapper>
  );
});

export default SearchField;
