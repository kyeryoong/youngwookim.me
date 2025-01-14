'use client';

import { TouchEvent, useCallback, useState } from 'react';

import IconButton from '@/theme/IconButton';
import Pagination from '@/theme/Pagination';

import projectsData from './data';
import ProjectItem from './ProjectItem';
import * as S from './styled';

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleProjectItemClick = useCallback((projectIndex: number) => {
    setCurrentIndex(projectIndex);
  }, []);

  const handleLeftButtonClick = useCallback(() => {
    if (currentIndex !== 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleRightButtonClick = useCallback(() => {
    if (currentIndex !== projectsData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const handleTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = () => {
    const touchDistance = touchStartX - touchEndX;

    if (Math.abs(touchDistance) > 50 && touchEndX > 0) {
      if (touchDistance > 50) {
        handleRightButtonClick();
      } else if (touchDistance < -50) {
        handleLeftButtonClick();
      }
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <S.MainPageWrapper>
      <S.ProjectItemsWrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projectsData.map((project, index) => (
          <ProjectItem
            key={project.title}
            projectIndex={index}
            currentIndex={currentIndex}
            title={project.title}
            subtitle={project.subtitle}
            onClick={handleProjectItemClick}
          />
        ))}
      </S.ProjectItemsWrapper>

      <S.ArrowButtonWrapper>
        <IconButton type={'left'} onClick={handleLeftButtonClick} disabled={currentIndex === 0} />
        <IconButton
          type={'right'}
          onClick={handleRightButtonClick}
          disabled={currentIndex === projectsData.length - 1}
        />
      </S.ArrowButtonWrapper>

      <S.PaginationWrapper>
        <Pagination
          currentIndex={currentIndex}
          totalIndex={projectsData.length}
          onClick={handleProjectItemClick}
        />
      </S.PaginationWrapper>
    </S.MainPageWrapper>
  );
};

export default MainPage;
