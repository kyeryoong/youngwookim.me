import styled from 'styled-components';

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
  z-index: 1;
`;

export const NavigationBar = styled('div')<NavigationBarProps>`
  width: 100vw;
  height: 36dvh;
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
  z-index: 1;

  @media (pointer: coarse) or (max-width: 1000px) {
    height: 30dvh;
    padding-left: 5vw;
    padding-right: 5vw;
    gap: min(8px, 1vw);
    grid-template-columns: ${({ achievementIndex }) =>
      achievementIndex === 0 ? '6fr 1fr' : '1fr 6fr'};
  }
`;
