import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react';

import * as S from './styled';

const VolumeSlider = observer(() => {
  const [volume, setVolume] = useState<number>(70);
  const [savedVolume, setSavedVolume] = useState<number | null>(null);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  const handleButtonClick = () => {
    if (volume === 0) {
      if (savedVolume) {
        setVolume(savedVolume);
      }
    } else {
      setSavedVolume(volume);
      setVolume(0);
    }
  };

  const getVolumeLevelIcon = () => {
    if (volume === 0) {
      return <S.MuteIcon />;
    } else {
      if (volume > 0 && volume < 33) {
        return (
          <>
            <S.Level1Icon />
          </>
        );
      } else if (volume >= 33 && volume < 66) {
        return (
          <>
            <S.Level1Icon />
            <S.Level2Icon />
          </>
        );
      } else if (volume >= 66 && volume <= 100) {
        return (
          <>
            <S.Level1Icon />
            <S.Level2Icon />
            <S.Level3Icon />
          </>
        );
      }
    }
  };

  return (
    <S.VolumeSliderWrapper>
      <S.VolumeButtonWrapper onClick={handleButtonClick}>
        <S.VolumeLabelIcon />
        {getVolumeLevelIcon()}
      </S.VolumeButtonWrapper>
      <S.VolumeSlider type="range" value={volume} onChange={handleSliderChange} min="0" max="100" />
    </S.VolumeSliderWrapper>
  );
});

export default VolumeSlider;
