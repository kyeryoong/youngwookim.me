import Image from 'next/image';
import Link from 'next/link';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import { styled } from 'styled-components';

type ProjectItemWrapperProps = {
  isSelected: boolean;
  currentIndex: number;
};

type ProjectLogoWrapperProps = {
  isSelected: boolean;
};

type ProjectLogoProps = {
  isSelected: boolean;
};

type ProjectNameProps = {
  isSelected: boolean;
};

type ProjectMoreButtonProps = {
  isSelected: boolean;
  disabled?: boolean;
};

export const ProjectItemWrapper = styled('div')<ProjectItemWrapperProps>`
  width: ${({ isSelected }) => (isSelected ? 'min(490px, 70vw)' : 'min(350px, 50vw)')};
  height: fit-content;
  display: grid;
  transform: ${({ currentIndex }) =>
    `translateX(calc(50vw - min(245px, 35vw) - ${currentIndex} * min(350px, 50vw)))`};
  transition: 0.5s;
  z-index: ${({ isSelected }) => (isSelected ? 10 : 0)};
`;

export const ProjectLogoWrapper = styled('div')<ProjectLogoWrapperProps>`
  width: ${({ isSelected }) => (isSelected ? 'min(490px, 70vw)' : 'min(350px, 50vw)')};
  height: min(490px, 70vw);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({ theme, isSelected }) =>
    theme.mode === 'dark' && (isSelected ? 'brightness(1.0)' : 'brightness(0.6)')};
  opacity: ${({ theme, isSelected }) => theme.mode === 'light' && (isSelected ? 1 : 0.4)};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(1);
    opacity: 1;
  }
`;

export const ProjectLogo = styled(Image)<ProjectLogoProps>`
  width: ${({ isSelected }) => (isSelected ? 'min(490px, 70vw)' : 'min(350px, 50vw)')};
  height: ${({ isSelected }) => (isSelected ? 'min(490px, 70vw)' : 'min(350px, 50vw)')};
  object-fit: contain;
  transition: 0.5s;
`;

export const ProjectName = styled('div')<ProjectNameProps>`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transition: 0.5s;
`;

export const ProjectTitle = styled('h2')`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(7.2vw, 2.5rem);
  }
`;

export const ProjectSubtitle = styled('h3')`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.gray[300]};
  margin-top: 8px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3.6vw, 1.2rem);
  }
`;

export const ProjectMoreButton = styled(Link)<ProjectMoreButtonProps>`
  width: fit-content;
  display: block;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  pointer-events: ${({ isSelected, disabled }) =>
    disabled ? 'none' : isSelected ? 'default' : 'none'};
  transition: 0.5s;
  margin-top: 32px;
`;

export const MoreButtonIcon = styled(BoxArrowUpRight)`
  width: 20px;
  height: 20px;
`;
