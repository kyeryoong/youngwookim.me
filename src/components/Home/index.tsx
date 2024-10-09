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
import Text from './Text';
import VolumeSlider from './VolumeSlider';
import FontColorButton from './FontColorButton';

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
      <Text>{message[0]}</Text>
      <CheckBox />
      <Text>{message[1]}</Text>
      <ToggleSwitch />
      <Text>{message[2]}</Text>
      <DropDown />
      <Text>{message[3]}</Text>
      <VolumeSlider />
      <Text>{message[4]}</Text>
      <LikeButton />
      <Text>{message[5]}</Text>
      {/* <SearchField /> */}
      <FontColorButton />
      <Text>{message[6]}</Text>
      <LanguageRadioButton />
      <Text>{message[7]}</Text>
      <FontStyleButton />
      <Text>{message[8]}</Text>
    </S.BackgroundWrapper>
  );
});

export default Home;
