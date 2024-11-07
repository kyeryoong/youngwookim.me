import { useState } from 'react';

import projectsData from './data';
import ProjectItem from './ProjectItem';
import * as S from './styled';

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleProjectItemClick = (projectIndex: number) => {
    setCurrentIndex(projectIndex);
  };

  const handleLeftButtonClick = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleRightButtonClick = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <S.MainPageWrapper>
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

      <S.ArrowButtonWrapper>
        <S.LeftButton onClick={handleLeftButtonClick} disabled={currentIndex === 0}>
          <S.LeftIcon />
        </S.LeftButton>
        <S.RightButton
          onClick={handleRightButtonClick}
          disabled={currentIndex === projectsData.length - 1}
        >
          <S.RightIcon />
        </S.RightButton>
      </S.ArrowButtonWrapper>
    </S.MainPageWrapper>
  );
};

export default MainPage;
