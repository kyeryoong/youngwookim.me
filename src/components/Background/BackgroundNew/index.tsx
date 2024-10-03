import { observer } from 'mobx-react-lite';

import store from '@/stores/store';

import CheckBox from './CheckBox';
import DropDown from './DropDown';
import LanguageRadioButton from './LanguageRadioButton';
import LikeButton from './LikeButton';
import SearchField from './SearchField';
import * as S from './styled';
import ToggleSwitch from './ToggleSwitch';
import VolumeSlider from './VolumeSlider';

const BackgroundNew = observer(() => {
  const englishMessage = [
    'Hello.',
    'My',
    'Name',
    'Is',
    'Young-Woo',
    'Kim.',
    "I'm",
    'Front-end',
    'Developer',
  ];

  const koreanMessage = [
    '안녕하세요.',
    '제',
    '이름은',
    '김영우',
    '입니다.',
    '저는',
    '프론트엔드',
    '개발자',
    '입니다.',
  ];

  const message = store.language === 'en' ? englishMessage : koreanMessage;

  return (
    <S.BackgroundWrapper>
      <S.Text>{message[0]}</S.Text>
      <CheckBox />
      <S.Text>{message[1]}</S.Text>
      <ToggleSwitch />
      <S.Text>{message[2]}</S.Text>
      <DropDown />
      <S.Text>{message[3]}</S.Text>
      <VolumeSlider />
      <S.Text>{message[4]}</S.Text>
      <LikeButton />
      <S.Text>{message[5]}</S.Text>
      <SearchField />
      <S.Text>{message[6]}</S.Text>
      <LanguageRadioButton />
      <S.Text>{message[7]}</S.Text>
      {/* <Pagination /> */}
      <S.Text>{message[8]}</S.Text>
    </S.BackgroundWrapper>
  );
});

export default BackgroundNew;
