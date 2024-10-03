import { observer } from 'mobx-react-lite';

import CheckBox from './CheckBox';
import DropDown from './DropDown';
import LikeButton from './LikeButton';
import * as S from './styled';
import ToggleSwitch from './ToggleSwitch';
import VolumeSlider from './VolumeSlider';

const BackgroundNew = observer(() => {
  return (
    <S.BackgroundWrapper>
      <S.Text>Hello.</S.Text>
      <CheckBox />
      <S.Text>My</S.Text>
      <ToggleSwitch />
      <S.Text>Name</S.Text>
      <DropDown />
      <S.Text>Is</S.Text>
      <VolumeSlider />
      <S.Text>Young-Woo</S.Text>
      <LikeButton />
      <S.Text>Kim.</S.Text>
      {/* <SearchField /> */}
      <S.Text>I&#39;m</S.Text>
      {/* <ProgressBar /> */}
      <S.Text>Front-end</S.Text>
      {/* <Pagination /> */}
      <S.Text>Developer.</S.Text>
    </S.BackgroundWrapper>
  );
});

export default BackgroundNew;
