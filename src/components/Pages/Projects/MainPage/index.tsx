import { useState } from 'react';

import * as S from './styled';

const MainPage = () => {
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const handleLeftButtonClick = () => {
    setProjectIndex((prev) => prev - 1);
  };

  const handleRightButtonClick = () => {
    setProjectIndex((prev) => prev + 1);
  };

  return (
    <S.MainPageWrapper>
      <S.ProjectItemCarousel projectIndex={projectIndex}>
        <S.ProjectItem isSelected={projectIndex === 0} indexDiff={Math.abs(projectIndex - 0)}>
          1
        </S.ProjectItem>
        <S.ProjectItem isSelected={projectIndex === 1} indexDiff={Math.abs(projectIndex - 1)}>
          2
        </S.ProjectItem>
        <S.ProjectItem isSelected={projectIndex === 2} indexDiff={Math.abs(projectIndex - 2)}>
          3
        </S.ProjectItem>
        <S.ProjectItem isSelected={projectIndex === 3} indexDiff={Math.abs(projectIndex - 3)}>
          4
        </S.ProjectItem>
        <S.ProjectItem isSelected={projectIndex === 4} indexDiff={Math.abs(projectIndex - 4)}>
          5
        </S.ProjectItem>
      </S.ProjectItemCarousel>
      <div style={{ position: 'fixed', bottom: '50px' }}>
        <button onClick={handleLeftButtonClick}>left</button>
        <button onClick={handleRightButtonClick}>right</button>
      </div>
    </S.MainPageWrapper>
  );
};

export default MainPage;
