import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import ImageCarousel from '@/theme/ImageCarousel';

import achievementData from './data';
import ImageViewer from './ImageViewer';
import NavigationElement from './NavigationElement';
import * as S from './styled';

const Achievements = observer(() => {
  const [achievementIndex, setAchievementIndex] = useState<number>(0);
  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState<number>(0);
  const [indexProgress, setIndexProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [showImageViewer, setShowImageViewer] = useState<boolean>(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = () => {
        if (indexProgress < 9) {
          setIndexProgress(indexProgress + 1);
        } else {
          setIndexProgress(1);
          setAchievementIndex((prev) => (prev === 0 ? 1 : 0));
        }
      };

      const intervalId = setInterval(interval, 1000);

      return () => clearInterval(intervalId);
    }
  }, [indexProgress, isPaused]);

  const handleAchievement1Click = () => {
    setAchievementIndex(0);
    setIndexProgress(0);
  };

  const handleAchievement2Click = () => {
    setAchievementIndex(1);
    setIndexProgress(0);
  };

  const handleAchievement1MouseEnter = () => {
    if (achievementIndex === 0) {
      setIsPaused(true);
    }
  };

  const handleAchievement1MouseLeave = () => {
    if (achievementIndex === 0) {
      setIsPaused(false);
    }
  };

  const handleAchivement1MoreButtonClick = () => {
    setSelectedAchievementIndex(0);
    setShowImageViewer(true);
  };

  const handleAchievement2MouseEnter = () => {
    if (achievementIndex === 1) {
      setIsPaused(true);
    }
  };

  const handleAchievement2MouseLeave = () => {
    if (achievementIndex === 1) {
      setIsPaused(false);
    }
  };

  const handleAchivement2MoreButtonClick = () => {
    setSelectedAchievementIndex(1);
    setShowImageViewer(true);
  };

  const handleImageViewerClose = () => {
    setShowImageViewer(false);
  };

  return (
    <>
      <S.AchievementsWrapper>
        <ImageCarousel
          images={[
            '/achievements/graduation_project/main.jpg',
            '/achievements/fintech_hackerton/main.jpg',
          ]}
          imageIndex={achievementIndex}
          carouselOptions={{ allowMouseDrag: false }}
          carouselStyle={{ width: '100%', height: '100%' }}
          imageStyle={{ objectFit: 'cover' }}
        />

        <S.NavigationBar achievementIndex={achievementIndex}>
          <NavigationElement
            index={1}
            title={{
              kor: '홍익대학교 컴퓨터공학과 졸업 전시회',
              eng: 'Hongik University Computer Engineering Graduation Project',
              label: '최우수상',
            }}
            isFocused={achievementIndex === 0}
            progress={achievementIndex === 0 ? indexProgress : 0}
            onClick={handleAchievement1Click}
            onMouseEnter={handleAchievement1MouseEnter}
            onMouseLeave={handleAchievement1MouseLeave}
            onMoreButtonClick={handleAchivement1MoreButtonClick}
          />
          <NavigationElement
            index={2}
            title={{
              kor: '마이 핀테크 서비스 해커톤',
              eng: 'My Fintech Service Hackerton',
              label: '우수상(학생부)',
            }}
            isFocused={achievementIndex === 1}
            progress={achievementIndex === 1 ? indexProgress : 0}
            onClick={handleAchievement2Click}
            onMouseEnter={handleAchievement2MouseEnter}
            onMouseLeave={handleAchievement2MouseLeave}
            onMoreButtonClick={handleAchivement2MoreButtonClick}
          />
        </S.NavigationBar>
      </S.AchievementsWrapper>

      <ImageViewer
        show={showImageViewer}
        imageData={achievementData[selectedAchievementIndex]}
        onClose={handleImageViewerClose}
      />
    </>
  );
});

export default Achievements;
