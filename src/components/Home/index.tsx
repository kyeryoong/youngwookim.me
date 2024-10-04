import { observer } from 'mobx-react-lite';

import { useStore } from '@/stores';

import CheckBox from './CheckBox';
import DropDown from './DropDown';
import FontStyleButton from './FontStyleButton';
import LanguageRadioButton from './LanguageRadioButton';
import LikeButton from './LikeButton';
import SearchField from './SearchField';
import * as S from './styled';
import ToggleSwitch from './Switch';
import VolumeSlider from './VolumeSlider';

const Home = observer(() => {
  const { homeStore } = useStore();

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

  const message = homeStore.language === 'en' ? englishMessage : koreanMessage;

  return (
    <S.BackgroundWrapper>
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[0]}
      </S.Text>
      <CheckBox />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[1]}
      </S.Text>
      <ToggleSwitch />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[2]}
      </S.Text>
      <DropDown />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[3]}
      </S.Text>
      <VolumeSlider />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[4]}
      </S.Text>
      <LikeButton />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[5]}
      </S.Text>
      <SearchField />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[6]}
      </S.Text>
      <LanguageRadioButton />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[7]}
      </S.Text>
      <FontStyleButton />
      <S.Text isBold={homeStore.bold} isItalic={homeStore.italic}>
        {message[8]}
      </S.Text>
    </S.BackgroundWrapper>
  );
});

export default Home;
