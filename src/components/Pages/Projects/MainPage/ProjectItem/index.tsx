import { MouseEvent } from 'react';

import Button from '@/theme/Button';

import * as S from './styled';

type ProjectItemWrapper = {
  projectIndex: number;
  currentIndex: number;
  title: string;
  subtitle: string;
  onClick: (projectIndex: number) => void;
};

const ProjectItem = ({
  projectIndex,
  currentIndex,
  title,
  subtitle,
  onClick,
}: ProjectItemWrapper) => {
  const handleProjectLogoClick = () => {
    onClick(projectIndex);
  };

  const handleMoreButtonClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (title === 'react-tech-badge') {
      event?.preventDefault();
      alert('Coming Up!');
    }
  };

  return (
    <S.ProjectItemWrapper isSelected={projectIndex === currentIndex} currentIndex={currentIndex}>
      <S.ProjectLogoWrapper
        onClick={handleProjectLogoClick}
        isSelected={projectIndex === currentIndex}
      >
        <S.ProjectLogo
          width={400}
          height={400}
          src={`/projects/${title}.svg`}
          alt={title}
          isSelected={projectIndex === currentIndex}
        />
      </S.ProjectLogoWrapper>

      <S.ProjectName isSelected={projectIndex === currentIndex}>
        <S.ProjectTitle>{title}</S.ProjectTitle>
        <S.ProjectSubtitle>{subtitle}</S.ProjectSubtitle>

        <S.ProjectMoreButton
          onClick={handleMoreButtonClick}
          href={`/projects/${title}`}
          isSelected={projectIndex === currentIndex}
        >
          <Button icon={<S.MoreButtonIcon />}>자세히 보기</Button>
        </S.ProjectMoreButton>
      </S.ProjectName>
    </S.ProjectItemWrapper>
  );
};

export default ProjectItem;
