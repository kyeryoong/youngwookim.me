import styled from 'styled-components';

type ImageWrapperProps = {
  achievementIndex: number;
};

type NavigationBarProps = {
  achievementIndex: number;
};

export const AchievementsWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled('div')<ImageWrapperProps>`
  height: 100dvh;
  position: absolute;
  display: flex;
  left: ${({ achievementIndex }) => (achievementIndex === 0 ? '0px' : '-100vw')};
  transition: 0.5s;
`;

export const NavigationBar = styled('div')<NavigationBarProps>`
  width: 100vw;
  height: 32dvh;
  background: ${({ theme }) => `linear-gradient(360deg, ${theme.color.black}, transparent)`};
  position: fixed;
  bottom: 0px;
  padding-bottom: 6dvh;
  padding-left: 100px;
  padding-right: 100px;
  display: grid;
  grid-template-columns: ${({ achievementIndex }) =>
    achievementIndex === 0 ? '3fr 1fr' : '1fr 3fr'};
  gap: 8px;
  transition: 0.5s;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: 25dvh;
    padding-left: 5vw;
    padding-right: 5vw;
    gap: min(8px, 1vw);
    grid-template-columns: ${({ achievementIndex }) =>
      achievementIndex === 0 ? '6fr 1fr' : '1fr 6fr'};
  }
`;
