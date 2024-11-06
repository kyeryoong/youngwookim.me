import styled from 'styled-components';

type ProjectItemCarouselProps = {
  projectIndex: number;
};

type ProjectItemProps = {
  isSelected: boolean;
  indexDiff: number;
};

export const MainPageWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  background-color: ${({ theme }) => theme.color.black};
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
`;

export const ProjectItemCarousel = styled('div')<ProjectItemCarouselProps>`
  display: flex;
  align-items: center;
  transform: ${({ projectIndex }) => `translateX(calc(50vw - 300px - 500px * ${projectIndex}))`};
  transition: 0.5s;
`;

export const ProjectItem = styled('div')<ProjectItemProps>`
  width: ${({ isSelected }) => (isSelected ? '600px' : '500px')};
  height: ${({ isSelected }) => (isSelected ? '600px' : '500px')};
  background-color: gray;
  font-size: 3.2rem;
  color: ${({ theme }) => theme.color.white};
  border: 1px solid darkgray;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  transition: 0.5s;
`;
