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

const selectedWidth = 'min(480px, 64vw)';
const halfSelectedWidth = `calc(${selectedWidth} / 2)`;
const defaultWidth = 'min(320px, 32vw)';

export const ProjectItemWrapper = styled('div')<ProjectItemWrapperProps>`
  width: ${({ isSelected }) => (isSelected ? selectedWidth : defaultWidth)};
  height: fit-content;
  display: grid;
  transform: ${({ currentIndex }) =>
    `translateX(calc(50vw - ${halfSelectedWidth} - ${currentIndex} * ${defaultWidth}))`};
  transition: 0.5s;
  z-index: ${({ isSelected }) => (isSelected ? 10 : 0)};
`;

export const ProjectLogoWrapper = styled('div')<ProjectLogoWrapperProps>`
  width: ${({ isSelected }) => (isSelected ? selectedWidth : defaultWidth)};
  height: ${selectedWidth};
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
  width: ${({ isSelected }) => (isSelected ? selectedWidth : defaultWidth)};
  height: ${({ isSelected }) => (isSelected ? selectedWidth : defaultWidth)};
  object-fit: contain;
  transition: 0.5s;
`;

export const ProjectName = styled('div')<ProjectNameProps>`
  width: ${selectedWidth};
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transition: 0.5s;
`;

export const ProjectTitle = styled('h2')`
  font-size: 2.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.white};

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(7vw, 2.8rem);
  }
`;

export const ProjectSubtitle = styled('h3')`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.gray[300]};
  margin-top: 4px;

  @media (pointer: coarse) or (max-width: 1000px) {
    font-size: min(3vw, 1.2rem);
  }
`;

export const ProjectMoreButton = styled(Link)<ProjectMoreButtonProps>`
  width: fit-content;
  display: block;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  pointer-events: ${({ isSelected, disabled }) =>
    disabled ? 'none' : isSelected ? 'default' : 'none'};
  transition: 0.5s;
  margin-top: 36px;
`;

export const MoreButtonIcon = styled(BoxArrowUpRight)`
  width: 20px;
  height: 20px;
`;
